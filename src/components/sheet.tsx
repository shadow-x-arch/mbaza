import { Button } from "@/components/ui/button"
import ChatRoom from "@/components/chatRoom"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Live Chat</Button>
      </SheetTrigger>
      <SheetContent>
<ChatRoom />

      </SheetContent>
    </Sheet>
  )
}
