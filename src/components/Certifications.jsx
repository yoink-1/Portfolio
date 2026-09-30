import { BadgeCheck, ExternalLink } from "lucide-react";
import Section from "./Section.jsx";
import { certifications } from "../data/portfolio.js";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" tone="white">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((cert) => (
          <article key={cert.code} className="flex gap-5 rounded-xl border border-line bg-paper p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-accent ring-1 ring-line">
              <BadgeCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-muted">{cert.issuer}</p>
              <h3 className="mt-0.5 text-lg font-semibold text-ink">{cert.name}</h3>
              <p className="mt-2 inline-block rounded-md bg-accent-soft px-2 py-0.5 text-sm font-semibold text-accent">
                {cert.code}
              </p>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Verify credential <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
