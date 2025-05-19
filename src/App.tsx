import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Page from "@/app/dashboard/page"
import LoginPage from "@/app/login/page"
import AboutUs from "@/app/about-us/page"
import History from "@/app/history/page"
import Home from "@/app/home/page"
import Complaint from "@/app/complaint/page"
import DataTracking from "@/app/data/page"
import { SheetDemo } from "@/components/sheet"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/history" element={<History />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Page />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/data" element={<DataTracking />} />
          </Routes>
          <div
  className="fixed right-0 top-70 z-50 animate-slide-in rotate-270 hover:rotate-0 transition-transform duration-500 ease-out"
>
  <SheetDemo />
</div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
