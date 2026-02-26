import { Outlet } from "react-router-dom";
import Navbar from "@/shared/layout/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Navbar */}
      <Navbar />

      <main className="mx-auto max-w7 px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
