import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#090D16]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="text-base sm:text-lg font-semibold tracking-tight text-white hover:text-slate-300 transition-colors"
        >
          {portfolioData.personal.name}
        </a>

        {/* Zone 2: Primary Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#skills"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-white rounded-md hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors shadow-xs"
          >
            <span>View Skills</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D121F] border-b border-white/10 px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-slate-950 bg-white rounded-md hover:bg-slate-200 transition-colors shadow-xs"
            >
              <span>View Skills</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
