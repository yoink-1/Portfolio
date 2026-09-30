import { Code2, BarChart3, Table2, Sparkles, PenLine } from "lucide-react";
import Section from "./Section.jsx";
import { skillGroups } from "../data/portfolio.js";

// Icons matched to groups by name; unknown groups fall back to a pen icon.
const icons = {
  Programming: Code2,
  "Data & Analytics": BarChart3,
  Tools: Table2,
  "AI & Research": Sparkles,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Languages, tools and methods I use in coursework, projects and my internship.">
      <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
        {skillGroups.map((group) => {
          const Icon = icons[group.name] || PenLine;
          return (
            <div key={group.name} className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:items-center">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-semibold text-ink">{group.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
