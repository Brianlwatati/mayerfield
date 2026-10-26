import { Outlet, Link } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-amber-50/50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Top Branding/Logo linking back home */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center space-x-2">
          <span className="text-3xl">☕</span>
          <span className="font-bold text-2xl text-amber-950 tracking-tight">
            Brew & Bean
          </span>
        </Link>
      </div>

      {/* Auth Box Container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-4 shadow-sm border border-amber-100 sm:rounded-2xl sm:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
