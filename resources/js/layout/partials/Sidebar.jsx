import React from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, LogOut, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar({ sidebarOpen, setSidebarOpen, menuItems, handleLogout }) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarOpen ? 260 : 80 }}
      className="fixed left-0 top-0 z-40 hidden h-screen flex-col border-r border-border bg-card shadow-sm transition-colors duration-300 lg:flex"
    >
      {/* Brand Logo Section */}
      <div className="flex h-[80px] items-center gap-3 overflow-hidden whitespace-nowrap p-6">
        <div className="gradient-primary flex h-10 w-10 flex-shrink-0 animate-scale-in items-center justify-center rounded-xl shadow-lg shadow-primary/20">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
        <AnimatePresence mode="wait">
          {sidebarOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-sans text-xl font-extrabold tracking-tight text-foreground"
            >
              EduSmart
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Button - Menggunakan variabel --primary */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute -right-3 top-8 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-primary text-primary-foreground shadow-md transition-all hover:scale-110 active:scale-95"
      >
        <Menu className="h-3 w-3" />
      </button>

      {/* Menu Navigasi */}
      <nav className="custom-scrollbar mt-4 flex-1 space-y-2 overflow-y-auto px-3">
        {menuItems.map((item) => {
          const isActive = route().current(item.route);

          return (
            <Link
              key={item.label}
              href={route(item.route)}
              className={cn(
                "group relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 transition-all duration-300",
                isActive
                  ? "gradient-primary font-semibold text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-primary"
                )}
              />

              <AnimatePresence mode="wait">
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="overflow-hidden whitespace-nowrap text-sm tracking-wide"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Efek Hover Background Glow */}
              {!isActive && (
                <div className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Logout */}
      <div className="border-t border-border bg-muted/30 p-4">
        <button
          onClick={handleLogout}
          className={cn(
            "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive",
            !sidebarOpen && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
          <AnimatePresence>
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="whitespace-nowrap text-sm font-semibold"
              >
                Keluar
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
}
