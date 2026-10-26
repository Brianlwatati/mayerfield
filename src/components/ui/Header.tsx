import { useState } from "react";
import { Link } from "react-router";

// Navigation links array
const NAV_LINKS = [
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 1. Logo linking to home */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl">☕</span>
            <span className="font-bold text-xl text-amber-900 tracking-tight">
              Brew & Bean
            </span>
          </Link>

          {/* 2. Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-amber-800 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* 3. Action Buttons (Cart, Sign In & Mobile Toggle) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Cart Button */}
            <button
              type="button"
              className="relative p-2 text-gray-700 hover:text-amber-800 transition-colors"
              aria-label="Shopping Cart"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Sign In Link Button */}
            <Link
              to="/signin"
              className="px-3.5 py-1.5 text-sm font-medium text-amber-900 hover:bg-amber-100/60 rounded-lg transition-colors"
            >
              Sign In
            </Link>

            {/* Order Online CTA Button */}
            <a
              href="#menu"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-800 hover:bg-amber-900 transition-colors"
            >
              Order Online
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-amber-800 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-100 px-4 pt-2 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-amber-800 hover:bg-amber-50 px-3 py-2 rounded-md font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Sign In Link */}
            <Link
              to="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center w-full px-4 py-2 rounded-lg text-sm font-medium text-amber-900 bg-amber-100/60 hover:bg-amber-200/60 transition-colors"
            >
              Sign In
            </Link>

            {/* Mobile Order Online Button */}
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="sm:hidden block text-center mt-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-amber-800 hover:bg-amber-900 transition-colors"
            >
              Order Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
