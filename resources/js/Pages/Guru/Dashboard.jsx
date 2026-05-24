import DashboardLayout from "@/layout/DashboardLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard Guru" />
      <h1>Dashboard Guru</h1>
    </>
  );
}

Dashboard.layout = (page) => <DashboardLayout children={page} />;
