import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, LogOut, Menu, X } from "lucide-react";

export default function SidebarResponsive({ isOpen, setIsOpen, menuItems, handleLogout }) {
  return (
    <>
      {/* Header mobile */}
      <div className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-border bg-card p-4 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="gradient-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-lg shadow-primary/20">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary-foreground">EduSmart</span>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full border border-slate-200 bg-white p-2 text-black shadow-sm transition-all hover:bg-slate-100"
        >
          <Menu className="h-6 w-6 text-muted-foreground" />
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[50] bg-background/60 backdrop-blur-sm lg:hidden"
            >
              {/* Sidebar panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 top-0 z-[51] flex w-[280px] flex-col border-r border-border shadow-2xl lg:hidden"
              >
                <div className="flex items-center justify-between border-b border-border p-6">
                  <div className="flex items-center gap-3">
                    <div className="gradient-primary flex h-9 w-9 items-center justify-center rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="font-extrabold text-foreground">EduSmart</span>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full border border-slate-200 bg-white p-2 text-black shadow-sm transition-all hover:bg-slate-100"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="overflow-hidden-y-auto flex-1 space-y-1 p-4">
                  {menuItems.map((item) => {
                    const isActive = route().current(item.route);

                    return (
                      <Link
                        key={item.route}
                        href={route(item.route)}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
                          isActive
                            ? "gradient-primary font-semibold text-primary-foreground shadow-lg shadow-primary/25"
                            : "text-muted-foregorund hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "h-5 w-5",
                            isActive ? "text-primary-foreground" : "text-muted-foreground"
                          )}
                        />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="border-t border-border p-4">
                  <Button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-destructive-foreground transition-all hover:bg-destructive/10"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Keluar</span>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
