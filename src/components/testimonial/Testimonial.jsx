import Section from "../ui/Section";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import Reveal from "../ui/Reveal";

const testimonialData = [
  {
    message:
      "Outstanding professional — goes above and beyond to satisfy his clients. We look forward to working with Ahmed many more times.",
    name: "Matt",
    location: "Australia",
  },
  {
    message: "Great job, highly recommended. Clear communication throughout.",
    name: "Tanveer Singh",
    location: "Singapore",
  },
  {
    message:
      "Professional, reliable, and creative. Delivered on time with amazing results.",
    name: "AJ Caine",
    location: "United States",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonial = () => (
  <Section id="testimonials" alt>
    <Container>
      <Reveal className="mb-12 flex flex-col gap-4">
        <Kicker>Words</Kicker>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
          What people say
        </h2>
      </Reveal>

      <div className="grid overflow-hidden rounded-[4px] border border-line sm:grid-cols-3">
        {testimonialData.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 60}
            className={`h-full bg-raised p-6 ${
              i === testimonialData.length - 1
                ? ""
                : "border-b border-line sm:border-b-0 sm:border-r"
            }`}
          >
            <p className="text-[15px] leading-relaxed text-ink">
              &ldquo;{t.message}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-ink font-display text-xs font-semibold text-ink">
                {initials(t.name)}
              </span>
              <span>
                <span className="block font-display text-sm font-semibold text-ink">
                  {t.name}
                </span>
                <span className="block font-mono text-[10.5px] text-ink-muted">
                  {t.location}
                </span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);

export default Testimonial;
