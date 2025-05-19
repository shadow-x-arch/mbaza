"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function Sonne() {
  const handleClick = () => {
    const now = new Date()
    const formatted = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    toast("Message has been sent", {
      description: ( 
         <span className="text-sm text-gray-700 dark:text-gray-400">
        {formatted}
      </span>),
    })
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      Send message
    </Button>
  )
}
