import { Outlet } from "react-router";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Shared Header */}
      <Header />

      {/* Dynamic page content gets rendered inside <Outlet /> */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
