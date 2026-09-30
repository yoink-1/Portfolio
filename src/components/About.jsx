import { GraduationCap } from "lucide-react";
import Section from "./Section.jsx";
import { profile, education, softSkills } from "../data/portfolio.js";

export default function About() {
  return (
    <Section id="about" title="About me" tone="white">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-line bg-paper p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{education.degree}</h3>
                <p className="mt-1 text-muted">{education.school}</p>
                <p className="mt-3 text-sm text-muted">{education.period}</p>
                <p className="text-sm font-medium text-accent">{education.detail}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink">Strengths</h3>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <li key={s} className="rounded-md border border-line px-3 py-1.5 text-sm text-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
