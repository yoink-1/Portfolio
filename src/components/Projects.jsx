import { ExternalLink, Lightbulb, BarChart3 } from "lucide-react";
import Section from "./Section.jsx";
import { projects } from "../data/portfolio.js";
import { GitHubIcon } from "./BrandIcons.jsx";

function ProjectLinks({ project }) {
  if (!project.githubUrl && !project.demoUrl) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
        >
          <GitHubIcon className="h-4 w-4" /> View code
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-ink/15 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <ExternalLink className="h-4 w-4" /> Live demo
        </a>
      )}
    </div>
  );
}

function PointList({ points }) {
  return (
    <ul className="space-y-2.5">
      {points.map((p) => (
        <li key={p} className="flex gap-3 leading-relaxed text-muted">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-point" aria-hidden="true" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-[1fr_1.1fr]">
      <div className="border-b border-line bg-accent-soft/60 p-7 md:p-9 lg:border-b-0 lg:border-r">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-white">
          <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" /> {project.badge}
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{project.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
        <p className="mt-6 text-sm font-semibold text-ink">Focus</p>
        <p className="mt-1 text-muted">{project.focus}</p>
        {project.tech.length > 0 && (
          <>
            <p className="mt-6 text-sm font-semibold text-ink">Technologies</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-md border border-accent/20 bg-white px-2.5 py-1 text-sm font-medium text-accent">
                  {t}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="p-7 md:p-9">
        <h4 className="mb-4 font-semibold text-ink">Key contributions</h4>
        <PointList points={project.points} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-dashed border-ink/20 bg-white p-7 md:p-9">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h3 className="text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-point/40 bg-point/10 px-2.5 py-1 text-xs font-semibold text-point">
          <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" /> {project.badge}
        </span>
      </div>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{project.description}</p>
      <div className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <PointList points={project.points} />
        <div>
          <p className="text-sm font-semibold text-ink">Focus</p>
          <p className="mt-1 text-muted">{project.focus}</p>
          {project.tech.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ProjectLinks project={project} />
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-8">
        {projects.map((project) =>
          project.featured ? (
            <FeaturedProject key={project.title} project={project} />
          ) : (
            <ProjectCard key={project.title} project={project} />
          )
        )}
      </div>
    </Section>
  );
}
