"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareLibrary,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Admin-Login-Octave",
    email: "octave@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Information",
      url: "#",
      icon: SquareLibrary,
      isActive: true,
      items: [
        {
          title: "Home",
          url: "/home",
        },
        {
          title: "History",
          url: "/history",
        },
        {
          title: "About us",
          url: "/about-us",
        },
        {
          title: "Send Your Complaint",
          url: "/Complaint",
        },
        {
          title: "About Your Complaint",
          url: "/data",
        },
        {
          title: "Login",
          url: "/login",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Start",
          url: "#",
        },
        {
          title: "Test",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Our Team",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Get Support",
      url: "/data",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/data",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Infrastructure",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sustainability",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu className="mt-0">
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <span>
              <div className="flex aspect-square items-center justify-center rounded-lg">
              <img
              src="https://cdn-icons-png.flaticon.com/128/8287/8287208.png" alt="Ask Icon" className="w-10 h-10"/>
              </div>

                <div className="grid flex-1 leading-tight">
                  <span className="truncate font-semibold text-2xl">Mbaza</span>
                </div>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
