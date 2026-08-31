import Section from "../ui/Section";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import Reveal from "../ui/Reveal";
import Roles from "./Roles";

const rolesData = [
  {
    id: "01",
    title: "AI Engineering",
    description:
      "LLM application design, evaluation, and deployment — from prompt architecture and guardrails to a production rollout.",
  },
  {
    id: "02",
    title: "RAG & LLM Pipelines",
    description:
      "Retrieval systems, embeddings, and grounded generation over your own data, with the eval harness to keep it honest.",
  },
  {
    id: "03",
    title: "n8n Automation Workflows",
    description:
      "Agentic and event-driven automation that connects your tools and removes the manual steps between them.",
  },
];

const Profession = () => (
  <Section id="services" alt>
    <Container>
      <Reveal className="mb-12 flex max-w-2xl flex-col gap-4">
        <Kicker>What I do</Kicker>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
          Services
        </h2>
        <p className="text-sm text-ink-soft">
          Focused engagements around building and shipping AI features.
        </p>
      </Reveal>

      <div className="grid overflow-hidden rounded-[4px] border border-line sm:grid-cols-3">
        {rolesData.map((role, i) => (
          <Reveal key={role.id} delay={i * 60}>
            <Roles role={role} last={i === rolesData.length - 1} />
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);

export default Profession;
