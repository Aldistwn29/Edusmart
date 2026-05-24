import { Button } from "@/Components/ui/button";
import { GURU_MENU_ITEMS, SISWA_MENU_ITEMS } from "@/constats/navigation";
import { Head, Link, router, usePage } from "@inertiajs/react";
import Sidebar from "./partials/Sidebar";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import SidebarResponsive from "./partials/SidebarResponsive";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/Components/ui/alert-dialog";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const { url, auth } = usePage().props;
  // Update the role logic to use the 'role' attribute directly
  const role = auth.user?.role;
  const isGuru = role === "teacher";
  const menuItems = isGuru ? GURU_MENU_ITEMS : SISWA_MENU_ITEMS;

  // action handle logout (triggers dialog)
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLogoutDialogOpen(true);
  };

  // confirm logout (actual action)
  const confirmLogout = () => {
    router.post(route("logout"));
  };

  // auto-colse mobile-menu ketika keluar
  useEffect(() => {
    setMobileMenu(false);
  }, [url]);

  return (
    <div className="flex min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
      {/* Header */}
      <Head className="Dashboard" />
      {/* Notification provider */}
      <Toaster position="top-right" closeButton richColors />
      {/* Sidebar Desktop */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        menuItems={menuItems}
        url={url}
        handleLogout={handleLogout}
      />
      {/* Mobile Navigation */}
      <SidebarResponsive
        isOpen={mobileMenu}
        setIsOpen={setMobileMenu}
        menuItems={menuItems}
        url={url}
        handleLogout={handleLogout}
      />
      {/* Page Content */}
      <main
        className={cn(
          "flex-1 pt-[80px] transition-all duration-300 lg:pt-0",
          sidebarOpen ? "lg:ml-[280px]" : "lg:ml-[80px]"
        )}
      >
        <div className="mx-auto max-w-[1600px] p-4 md:p-8">{children}</div>
      </main>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah anda yakin ingin keluar?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda akan diarahkan kembali ke halaman login. Anda perlu masuk kembali untuk mengakses
              akun Anda.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmLogout}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Keluar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
