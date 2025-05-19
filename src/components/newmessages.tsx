"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MessagesTable from "@/components/MessagesTable";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          Press here to see new Complaints
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <MessagesTable />
      </DrawerContent>
    </Drawer>
  );
}
