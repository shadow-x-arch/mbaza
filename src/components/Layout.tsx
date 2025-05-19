import { ReactNode } from "react";
import {  AppSidebar } from "@/components/app-sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppSidebar>
      <AppSidebar />
      {children}
    </AppSidebar>
  );
}
