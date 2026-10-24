// 1. Navigation links array matching your header structure
const FOOTER_NAV = [
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
];

// 2. Social Media Links
const SOCIAL_LINKS = [
  { name: "Instagram", icon: "📸", href: "#instagram" },
  { name: "Facebook", icon: "📘", href: "#facebook" },
  { name: "Twitter/X", icon: "🐦", href: "#twitter" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-amber-100/80 border-t border-amber-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Grid: 4 Columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-amber-900/60">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-3xl">☕</span>
              <span className="font-bold text-2xl text-amber-50 tracking-tight">
                Brew & Bean
              </span>
            </div>
            <p className="text-sm text-amber-200/70 leading-relaxed">
              Crafting cozy moments, artisanal roasts, and fresh pastries every
              single day. Stop by for your daily cup of perfection.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-9 h-9 rounded-full bg-amber-900/60 hover:bg-amber-800 text-amber-100 flex items-center justify-center transition-colors text-sm"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-amber-50 font-semibold text-xs mb-4 tracking-wider uppercase ">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-amber-200/70 hover:text-amber-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Store Hours */}
          <div>
            <h3 className="text-amber-50 font-semibold text-xs mb-4 tracking-wider uppercase ">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm text-amber-200/70">
              <li className="flex justify-between border-b border-amber-900/40 pb-1.5">
                <span>Mon - Fri</span>
                <span className="text-amber-100 font-medium">
                  7:00 AM - 7:00 PM
                </span>
              </li>
              <li className="flex justify-between border-b border-amber-900/40 pb-1.5">
                <span>Saturday</span>
                <span className="text-amber-100 font-medium">
                  8:00 AM - 8:00 PM
                </span>
              </li>
              <li className="flex justify-between pb-1.5">
                <span>Sunday</span>
                <span className="text-amber-100 font-medium">
                  8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Location / Tagline */}
          <div>
            <h3 className="text-amber-50 font-semibold text-xs  mb-4 tracking-wider uppercase ">
              Visit Our Shop
            </h3>
            <p className="text-sm text-amber-200/70 leading-relaxed mb-3">
              📍 123 Artisan Roasters Way
              <br />
              Coffee District, NY 10001
            </p>
            <div className="inline-flex items-center space-x-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open Today until 7:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/50 space-y-4 sm:space-y-0">
          <p>© {currentYear} Brew & Bean Coffee House. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Made with</span>
            <span className="text-red-400">♥</span>
            <span>for coffee lovers everywhere.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
