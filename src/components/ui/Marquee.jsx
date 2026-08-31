const ITEMS = [
  "LLMs",
  "RAG",
  "AI Agents",
  "Voice AI",
  "n8n",
  "PyTorch",
  "TypeScript",
  "Python",
  "Next.js",
  "Vector Search",
  "Evaluation",
];

const Marquee = () => (
  <div
    className="marquee overflow-hidden border-y border-line bg-raised py-3.5"
    aria-hidden="true"
  >
    <div className="marquee-track gap-10 pr-10">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.06em] text-ink-muted before:mr-2 before:text-accent before:content-['—']"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
