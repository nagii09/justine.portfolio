import { useState } from "react";
import { GraduationCap, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function About() {
  const { personal, about } = portfolioData;
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0B0F19] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Background & Profile
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-white mt-3 rounded-full" />
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Profile Picture */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-sm sm:max-w-md">
              {/* Clean Outer Dark Frame */}
              <div className="p-3 bg-[#101626] border border-white/10 rounded-2xl shadow-xl shadow-black/40 transition-shadow hover:border-white/20">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-[#070A10] flex items-center justify-center">
                  {!hasImageError ? (
                    <img
                      src={personal.profileImagePath}
                      alt={`Professional portrait of ${personal.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-all duration-300"
                      onError={() => setHasImageError(true)}
                    />
                  ) : (
                    /* Fallback when image is missing or loading fails */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#070A10] text-slate-400">
                      <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-slate-200 font-bold text-2xl mb-3 shadow-inner">
                        JA
                      </div>
                      <p className="text-sm font-medium text-white">{personal.name}</p>
                      <p className="text-xs text-slate-400 mt-1">Profile Photo</p>
                    </div>
                  )}

                  {/* Clean status badge in bottom corner */}
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md border border-white/10 shadow-xs flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{personal.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio, Education, Interests, Strengths */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Personal Introduction */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Personal Introduction
              </h3>
              {about.introduction.map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Educational Background */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-slate-300" />
                <h3 className="text-lg font-semibold text-white">
                  Educational Background
                </h3>
              </div>
              
              <div className="p-4 bg-[#101626] border border-white/10 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="font-semibold text-white text-base">
                    {about.education.degree}
                  </h4>
                  {about.education.period && (
                    <span className="text-xs font-medium text-slate-400">
                      {about.education.period}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-300 mt-0.5">
                  {about.education.institution}
                </p>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {about.education.details}
                </p>
              </div>
            </div>

            {/* Career Interests */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-slate-300" />
                <h3 className="text-lg font-semibold text-white">
                  Career Interests
                </h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {about.careerInterests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" aria-hidden="true" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths & Personality */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-slate-300" />
                <h3 className="text-lg font-semibold text-white">
                  Key Strengths & Work Ethic
                </h3>
              </div>

              <div className="space-y-3.5">
                {about.strengths.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
