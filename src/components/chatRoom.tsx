import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  sender: "me" | "people" | "support" | "admin"
  content: string
  timestamp: string
}

const senderInfo: Record<Message["sender"], { name: string; avatar: string }> = {
  me: {
    name: "You",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  people: {
    name: "Alex",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  support: {
    name: "Support",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  admin: {
    name: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  },
}

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "support",
      content: "Hello! Please describe your issue.",
      timestamp: "09:00 AM",
    },
    {
      id: 2,
      sender: "me",
      content: "We’re having a water issue in our area. Kagarama, kicukiro",
      timestamp: "09:01 AM",
    },
    {
      id: 3,
      sender: "people",
      content: "Same here at gatsata, any updates?",
      timestamp: "09:02 AM",
    },
    {
      id: 4,
      sender: "admin",
      content: "The issue has been reported. Team is on it.",
      timestamp: "09:03 AM",
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const newMsg: Message = {
      id: messages.length + 1,
      sender: "me",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    setMessages((prev) => [...prev, newMsg])
    setNewMessage("")
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className=" bg-gray-200 dark:bg-gray-950 flex items-center justify-center px-1 py-1">
      <Card className="w-full max-w-3xl h-full flex flex-col shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800">
        <div className="p-2 border-b border-gray-300 dark:border-gray-800 text-lg font-semibold text-gray-800 dark:text-gray-100">
          Citizen Support Chat
        </div>

        <CardContent className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg) => {
            const isMe = msg.sender === "me"
            const sender = senderInfo[msg.sender]

            return (
              <div
                key={msg.id}
                className={cn(
                  "flex items-end gap-2",
                  isMe ? "justify-end" : "justify-start"
                )}
              >
                {!isMe && (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={sender.avatar} />
                    <AvatarFallback>{sender.name[0]}</AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={cn(
                    "max-w-xs px-4 py-2 rounded-lg shadow text-sm",
                    isMe
                      ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-br-none"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-none"
                  )}
                >
                  {!isMe && (
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">
                      {sender.name}
                    </div>
                  )}
                  <p>{msg.content}</p>
                  <p className="text-[10px] text-right text-gray-500 mt-1">
                    {msg.timestamp}
                  </p>
                </div>

                {isMe && (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={sender.avatar} />
                    <AvatarFallback>{sender.name[0]}</AvatarFallback>
                  </Avatar>
                )}
              </div>
            )
          })}

          <div ref={chatEndRef} />
        </CardContent>

        <div className="p-4 border-t border-gray-300 dark:border-gray-800 flex gap-2 bg-gray-100 dark:bg-gray-900">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1"
          />
          <Button onClick={sendMessage} className="bg-gray-600 text-white hover:bg-gray-700">
            Send
          </Button>
        </div>
      </Card>
    </div>
  )
}
