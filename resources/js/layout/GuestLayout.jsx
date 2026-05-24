import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";

export default function GuestLayout({ children }) {
  return (
    <>
      <Head title="EduSmart" />

      <Toaster richColors position="top-center" closeButton />

      <div className="min-h-screen bg-background font-sans">{children}</div>
    </>
  );
}
