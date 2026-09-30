import { Briefcase, CheckCircle2 } from "lucide-react";
import Section from "./Section.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" tone="white">
      <ol className="relative space-y-10 border-l-2 border-line pl-8 md:pl-10">
        {experience.map((job) => (
          <li key={job.role + job.company} className="relative">
            <span className="absolute -left-[49px] top-1 grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-accent text-white md:-left-[57px]">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="rounded-xl border border-line bg-paper p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
                  <p className="mt-1 font-medium text-accent">{job.company}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="rounded-md border border-line bg-white px-3 py-1 text-sm text-muted">
                    {job.period}
                  </span>
                  <span className="rounded-md border border-line bg-white px-3 py-1 text-sm text-muted">
                    {job.type}, {job.mode}
                  </span>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-muted">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-point" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
