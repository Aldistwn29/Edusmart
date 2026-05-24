import DashboardLayout from "@/layout/DashboardLayout";
import { Head, Link } from "@inertiajs/react";
import { Children } from "react";

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard Siswa" />
      <h1>Dashboard Siswa</h1>
    </>
  );
}

Dashboard.layout = (page) => <DashboardLayout children={page} />;
