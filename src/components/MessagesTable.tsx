import { useEffect, useRef, useState } from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  id: number;
  full_name: string;
  email?: string;
  category: string;
  description: string;
  created_at: string;
  status?: string;
}

interface ScoredMessage extends Message {
  score: number;
}

const columnHelper = createColumnHelper<Message>();

export default function MessagesTable() {
  const [data, setData] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Failed to fetch messages");
        console.error(error);
      } else {
        const updatedData = data.map((item) => ({
          ...item,
          status: item.status || "pending",
        }));
        setData(updatedData);
      }

      setLoading(false);
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const longDescriptions = data.filter((msg) => msg.description.length > 300);
    const tableHeight = tableContainerRef.current?.scrollHeight || 0;

    const scoringTriggered =
      data.length > 100 ||
      longDescriptions.length > 10 ||
      tableHeight > 600;

    if (scoringTriggered) {
      const scored = scoreMessages(data);
      console.log("⚠️ Scoring activated!", scored);
    }
  }, [data]);

  const scoreMessages = (messages: Message[]): ScoredMessage[] => {
    return messages.map((msg) => ({
      ...msg,
      score:
        (msg.category.toLowerCase() === "urgent" ? 2 : 0) +
        (msg.description.length > 300 ? 1 : 0),
    }));
  };

  const handleSendToMainTable = async (row: Message) => {
    const { id, ...rest } = row;

    const { error } = await supabase.from("main_table").insert(rest);

    if (error) {
      toast.error("Failed to send to main table");
      console.error(error);
      return;
    }

    toast.success(`Complaint from ${row.full_name} sent!`);
  };

  const columns = [
    columnHelper.accessor("full_name", {
      header: "Full Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue() || "—",
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: "Description",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("created_at", {
      header: "Date",
      cell: (info) => new Date(info.getValue()).toLocaleString(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => (
        <span className="text-yellow-600 dark:text-yellow-400 font-medium">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.display({
      id: "action",
      header: "Action",
      cell: ({ row }) => (
        <Button
          variant="outline"
          onClick={() => handleSendToMainTable(row.original)}
          className="flex items-center gap-2"
        >
          <Send size={16} />
          Send to Main Table
        </Button>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card className="bg-transparent dark:bg-transparent shadow-md border-none w-full top-0 overflow-y-auto">
      <CardContent className="p-1">
        <h2 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-100 text-center">
          Submitted Complaints
        </h2>

        {loading ? (
          <p className="text-gray-700 dark:text-gray-300">Loading...</p>
        ) : (
          <div ref={tableContainerRef}>
            <table className="min-w-full text-sm border-collapse">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-4 py-2 text-left bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-2 border-b text-gray-700 dark:text-gray-300"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
