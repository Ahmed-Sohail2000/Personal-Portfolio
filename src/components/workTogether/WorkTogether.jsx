import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const WorkTogether = () => (
  <div className="border-y-2 border-ink bg-raised py-20 sm:py-24">
    <Container className="text-center">
      <Reveal>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Availability
        </span>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(2rem,5vw,2.9rem)] font-semibold tracking-[-0.022em] text-ink">
          Let&rsquo;s <span className="text-accent">work together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Open to freelance, contract, and full-time roles in AI engineering.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as="a" href="#contact" variant="primary">
            Start a conversation &rarr;
          </Button>
        </div>
      </Reveal>
    </Container>
  </div>
);

export default WorkTogether;
