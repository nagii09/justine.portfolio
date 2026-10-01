import { ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070A10] border-t border-white/10 py-10 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Name and Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 text-center sm:text-left">
          <span className="font-semibold text-white">{personal.name}</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        {/* Center/Right: Simple links and Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors pl-2 border-l border-white/10 cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
