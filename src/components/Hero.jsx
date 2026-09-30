import { MapPin, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";
import { LinkedInIcon, GitHubIcon } from "./BrandIcons.jsx";
import HeroChart from "./HeroChart.jsx";

export default function Hero() {
  return (
    <section id="home" className="bg-paper pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.title}
          </h1>
          <p className="mt-4 text-2xl font-medium tracking-tight text-accent sm:text-3xl">{profile.focus}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.heroIntro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-accent"
            >
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="transition-colors hover:text-accent">
              <Mail className="h-5 w-5" />
            </a>
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="transition-colors hover:text-accent"
              >
                <GitHubIcon />
              </a>
            )}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroChart />
        </div>
      </div>
    </section>
  );
}
