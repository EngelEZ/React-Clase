import { Outlet } from "react-router-dom";
import Navbar from "@/shared/layout/Navbar";
import heroBg from "@/assets/images/imagen-hero.jpg";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-surface">
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Navbar */}
      <Navbar />

      <main className="mx-auto max-w7 px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
