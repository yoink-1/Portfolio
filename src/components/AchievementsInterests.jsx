import { Trophy } from "lucide-react";
import Section from "./Section.jsx";
import { achievements, interests } from "../data/portfolio.js";

export default function AchievementsInterests() {
  return (
    <Section id="achievements" title="Achievements and interests">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-ink">Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex gap-4 rounded-xl border border-line bg-white p-4">
                <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-relaxed text-muted">{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-ink">Areas of interest</h3>
          <ul className="flex flex-wrap gap-2.5">
            {interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
