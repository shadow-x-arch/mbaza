import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";


interface ComplaintForm {
  fullName: string;
  email?: string;
  category: string;
  description: string;
}

export default function Complaint() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ComplaintForm>();

  const onSubmit = async (data: ComplaintForm) => {
    try {
      const { fullName, email, category, description } = data;

      const { error: insertError } = await supabase.from("messages").insert({
        full_name: fullName,
        email,
        category,
        description,
        created_at: new Date().toISOString(),
      });

      if (insertError) {
        toast.error("Submission Failed: Could not save your message.");
        return;
      }

      reset();
      toast.success("Complaint submitted successfully!");
    } catch (error) {
      toast.error("Unexpected Error: Something went wrong.");
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950 flex items-center justify-center px-4 py-8">
      <div className="grid max-w-5xl w-full grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 bg-white dark:bg-gray-900 shadow-lg border-none">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Submit a Complaint or Feedback
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <Label htmlFor="fullName" className="text-gray-800 dark:text-gray-300">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  {...register("fullName", { required: true })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-800 dark:text-gray-300">
                  Email (optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-gray-800 dark:text-gray-300">
                  Category
                </Label>
                <select
                  id="category"
                  {...register("category", { required: true })}
                  className={cn(
                    "w-full rounded-md border bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-2 mt-1"
                  )}
                >
                  <option value="">Select category</option>
                  <option value="sanitation">Sanitation</option>
                  <option value="water">Water</option>
                  <option value="electricity">Electricity</option>
                  <option value="health">Health Services</option>
                  <option value="roads">Roads & Transport</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-800 dark:text-gray-300">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your issue or feedback"
                  {...register("description", { required: true })}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-600 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                {isSubmitting ? "Submitting..." : "Submit Complaint"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 shadow-md border-none">
          <CardContent className="p-6 space-y-3">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">How It Works</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Use this form to submit complaints or feedback about public services.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Fill in your name and details.</li>
              <li>Select the appropriate category.</li>
              <li>Describe your issue clearly.</li>
            </ul>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your feedback helps us improve community services.
            </p>
          </CardContent>
        </Card>
        <div className="py-8">
    </div>
      </div>
    </div>
  );
}
