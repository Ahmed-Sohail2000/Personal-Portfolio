import ai from "../../assets/images/ai.jpg";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";
import SocialMedia from "../common/socialMedia/SocialMedia";

const focus = ["LLM apps", "RAG", "AI agents", "n8n automation", "ML / forecasting"];

const Profile = () => (
  <Section id="profile">
    <Container>
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <Reveal className="relative aspect-square overflow-hidden rounded-[4px] border border-ink bg-surface-alt shadow-[6px_6px_0_var(--accent-soft)]">
          <img src={ai} alt="Ahmed Sohail at work" className="h-full w-full object-cover" />
        </Reveal>

        <div>
          <Reveal>
            <Kicker>About</Kicker>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink"
          >
            Engineering intelligent systems, end to end
          </Reveal>

          <Reveal as="p" delay={120} className="mt-4 max-w-xl text-ink-soft">
            I&rsquo;m an AI engineer focused on LLM applications, retrieval
            pipelines, and agentic workflows. I&rsquo;ve built voice agents, quote
            engines, and automation that makes it to production &mdash; not just a
            notebook.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-4 max-w-xl text-ink-soft">
            My background is in electrical engineering, with a CAPM certification
            and a through-line of solar and energy work: panel-defect detection,
            yield forecasting, and demand-side response.
          </Reveal>

          <Reveal delay={200} className="mt-6 flex flex-wrap gap-2">
            {focus.map((f) => (
              <Tag key={f}>{f}</Tag>
            ))}
          </Reveal>

          <Reveal delay={240} className="mt-7 flex flex-wrap items-center gap-5">
            <Button as="a" href="/resume.pdf" download variant="ghost">
              Download CV
            </Button>
            <SocialMedia />
          </Reveal>
        </div>
      </div>
    </Container>
  </Section>
);

export default Profile;
