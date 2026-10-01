import { ArrowDown, MapPin, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle ambient light gradient in the background for visual depth */}
      <div 
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-slate-800/20 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle status/metadata note (unboxed text, no pills) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-6">
          <span className="flex items-center gap-2 text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            </span>
            <span>{personal.availability}</span>
          </span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>On-site & Remote</span>
          </span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span className="text-slate-400">IT Infrastructure & Web</span>
        </div>

        {/* Name & Title */}
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
            Hi, I'm
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white balance">
            {personal.name}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-slate-300">
            {personal.role}
          </p>
        </div>

        {/* Short introduction: 1-2 sentences */}
        <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          {personal.bioIntro}
        </p>

        {/* Core pillars metadata (unboxed text with typographic separator) */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
          <span className="font-medium text-slate-300">Core Focus:</span>
          <span>Hardware Maintenance & PC Builds</span>
          <span aria-hidden="true" className="text-slate-700">/</span>
          <span>Structured RJ45 Cabling & Networking</span>
          <span aria-hidden="true" className="text-slate-700">/</span>
          <span>Full-Stack Web Development</span>
        </div>

        {/* Clear CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-white rounded-md hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors shadow-xs"
          >
            <span>Read About Me</span>
            <ArrowDown className="w-4 h-4 text-slate-700" aria-hidden="true" />
          </a>

          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/15 rounded-md hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors shadow-2xs"
          >
            <Layers className="w-4 h-4 text-slate-400" aria-hidden="true" />
            <span>Explore Skills</span>
          </a>
        </div>
      </div>
    </section>
  );
}
