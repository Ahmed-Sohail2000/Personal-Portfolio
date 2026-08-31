import { useMemo, useState } from "react";
import { projects, PROJECT_FILTERS } from "../../data/projects";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import Reveal from "../ui/Reveal";

const ProjectRow = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`group border-b border-line transition-[background-color] duration-150 ease-snap hover:bg-raised ${
        open ? "bg-raised" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="grid w-full grid-cols-[2rem_1fr_auto] items-center gap-4 py-5 text-left sm:grid-cols-[3rem_1fr_auto]"
      >
        <span className="font-mono text-[15px] text-ink-muted transition-colors duration-150 ease-snap group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0">
          <span className="block font-display text-[clamp(1.25rem,2.6vw,1.7rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink transition-colors duration-150 ease-snap group-hover:text-accent">
            {project.title}
          </span>
          <span className="mt-2 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-[3px] border border-line-strong px-2 py-0.5 font-mono text-[11px] tracking-[0.03em] text-ink-soft"
              >
                {t}
              </span>
            ))}
          </span>
        </span>

        <span className="flex items-center gap-3">
          <span className="font-mono text-xs text-ink-muted">{project.year}</span>
          <span
            className="text-lg text-ink-muted transition-transform duration-200 ease-snap group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            aria-hidden="true"
          >
            &#8599;
          </span>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-snap group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="grid gap-6 pb-7 pt-1 sm:grid-cols-[200px_1fr] sm:pl-12">
            <div className="relative aspect-[16/9] rounded-[3px] border border-line bg-surface-alt [background-image:linear-gradient(rgba(27,30,39,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(27,30,39,0.06)_1px,transparent_1px)] [background-size:18px_18px]">
              <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-semibold text-accent">
                {project.title.charAt(0)}
              </span>
            </div>
            <div>
              <p className="max-w-md text-[14.5px] leading-relaxed text-ink-soft">
                {project.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-5">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] text-accent transition-colors duration-150 ease-snap hover:text-ink"
                >
                  Source &#8599;
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] text-accent transition-colors duration-150 ease-snap hover:text-ink"
                  >
                    Live demo &#8599;
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  return (
    <Section id="projects">
      <Container>
        <Reveal className="mb-8 flex max-w-2xl flex-col gap-4">
          <Kicker>Selected work</Kicker>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
            Projects
          </h2>
          <p className="text-sm text-ink-soft">
            Open a row for detail. Filter by focus area.
          </p>
        </Reveal>

        <div className="mb-2 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`rounded-[3px] border px-3 py-1.5 font-mono text-[11.5px] tracking-[0.04em] transition-colors duration-150 ease-snap ${
                  active
                    ? "border-ink bg-ink text-surface"
                    : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <ul className="border-t border-ink">
          {visible.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </ul>
        {visible.length === 0 && (
          <p className="py-10 font-mono text-sm text-ink-muted">
            Nothing under this filter yet.
          </p>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
