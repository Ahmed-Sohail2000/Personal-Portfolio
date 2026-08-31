import person from "../../assets/images/person.png";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const credentials = [
  { value: "1+ yrs", label: "building AI in production" },
  { value: "6", label: "shipped projects" },
  { value: "EE · CAPM", label: "engineering background" },
];

const Introduction = () => (
  <section
    id="introduction"
    className="scroll-mt-24 bg-surface pb-16 pt-24 sm:pb-20 sm:pt-32"
  >
    <Container>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <Kicker>AI Engineer — LLMs · Agents · Applied Intelligence</Kicker>
          </Reveal>

          <Reveal
            as="h1"
            delay={60}
            className="mt-5 font-display text-[clamp(2.75rem,7vw,4rem)] font-semibold leading-[1.02] tracking-[-0.026em] text-ink"
          >
            Ahmed Sohail
          </Reveal>

          <span className="accent-bar mt-6 block h-1 w-28 origin-left bg-accent" />

          <Reveal
            as="p"
            delay={120}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            I design and ship large-language-model systems, autonomous agents,
            and applied intelligent systems &mdash; from voice agents for grid
            operators to machine learning for energy demand response.
          </Reveal>

          <Reveal delay={180} className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="#projects" variant="primary">
              View work &rarr;
            </Button>
            <Button as="a" href="/resume.pdf" download variant="ghost">
              Download CV
            </Button>
          </Reveal>

          <Reveal
            delay={240}
            className="mt-11 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6"
          >
            {credentials.map((c) => (
              <div key={c.label} className="flex flex-col gap-1">
                <span className="font-display text-[17px] font-semibold text-ink">
                  {c.value}
                </span>
                <span className="font-mono text-[10.5px] tracking-[0.02em] text-ink-muted">
                  {c.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={160}
          className="relative aspect-[5/6] overflow-hidden rounded-[4px] border border-ink bg-surface-alt shadow-[6px_6px_0_var(--accent-soft)]"
        >
          <img
            src={person}
            alt="Ahmed Sohail"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </Container>
  </section>
);

export default Introduction;
