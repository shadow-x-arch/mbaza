import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Complent from "@/components/submitComplent"
import { Toaster } from "@/components/ui/sonner"
 
export default function Complaint() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
             
<Complent/>
<Toaster />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
