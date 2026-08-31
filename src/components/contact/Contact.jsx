import Section from "../ui/Section";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import Reveal from "../ui/Reveal";
import Form from "./Form";

const links = [
  { label: "ahmedsohail02000@gmail.com", href: "mailto:ahmedsohail02000@gmail.com" },
  { label: "linkedin.com/in/ahmed-sohail", href: "https://www.linkedin.com/in/ahmed-sohail/" },
  { label: "github.com/Ahmed-Sohail2000", href: "https://github.com/Ahmed-Sohail2000" },
];

const Contact = () => (
  <Section id="contact">
    <Container>
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Kicker>Contact</Kicker>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
            Send a message
          </h2>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            Tell me about the project or the role. I usually reply within a day.
          </p>
          <div className="mt-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block border-t border-line py-3 font-mono text-[12.5px] text-ink-soft transition-colors duration-150 ease-snap hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Form />
        </Reveal>
      </div>
    </Container>
  </Section>
);

export default Contact;
