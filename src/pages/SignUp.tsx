import { Link } from "react-router";

export default function SignUp() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-950 text-center mb-6">
        Create Account
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase sm-mb-1">
            Password
          </label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 rounded-lg border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-900 hover:bg-amber-950 text-white font-medium py-2.5 rounded-lg text-sm transition-colors"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-xs text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-amber-800 font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
