import { useState } from "react";
import { Network, Cpu, Code2, Server, Check } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, typeof Network> = {
    networking: Network,
    hardware: Cpu,
    "web-dev": Code2,
  };

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#090D16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technical Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills & Proficiencies
            </h2>
            <div className="w-12 h-1 bg-white mt-3 rounded-full" />
          </div>

          {/* Interactive Category Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#101626] border border-white/10 rounded-lg overflow-x-auto max-w-full shadow-sm">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === "all"
                  ? "bg-white text-slate-950 font-semibold shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-white text-slate-950 font-semibold shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Server;

            return (
              <div
                key={category.id}
                className="bg-[#0E1424] border border-white/10 rounded-xl p-6 shadow-xl shadow-black/25 flex flex-col justify-between transition-all duration-200 hover:border-white/20 hover:bg-[#12192c]"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {category.name}
                      </h3>
                      <p className="text-2xs text-slate-400">
                        {category.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List without fake percentage bars */}
                  <div className="divide-y divide-white/5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="py-2.5 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-1 shrink-0" aria-hidden="true" />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-slate-200">
                              {skill.name}
                            </p>
                            {skill.details && (
                              <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                                {skill.details}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note in card */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-2xs text-slate-500">
                  <span>Practical Experience</span>
                  <span className="font-mono text-slate-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on approach */}
        <div className="mt-12 p-4 bg-[#101626] border border-white/10 rounded-lg text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs text-slate-300 leading-relaxed">
            Skills are backed by hands-on lab exercises, practical hardware teardowns, structured network setup, and real project implementations.
          </p>
        </div>
      </div>
    </section>
  );
}
