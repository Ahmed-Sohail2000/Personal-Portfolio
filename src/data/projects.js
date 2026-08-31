// Curated showcase — edit freely.
// Each project: slug, title, blurb (one line), tags (2-4), categories (for the
// filter: "agents" | "ml" | "energy"), year, repo URL, optional demo URL.

export const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "agents", label: "Agents & Voice" },
  { id: "ml", label: "ML & CV" },
  { id: "energy", label: "Energy & Solar" },
];

export const projects = [
  {
    slug: "nomos",
    title: "Nomos — AI Voice Agent for Grid Operators",
    blurb:
      "Voice AI that gives B2B grid operators real-time market intelligence pulled from their own customer data.",
    tags: ["Voice AI", "LLM", "TypeScript"],
    categories: ["agents", "energy"],
    year: "2026",
    repo: "https://github.com/Ahmed-Sohail2000/AI-Energy-Hackathon-Tech-Europe-Nomos",
    demo: null,
  },
  {
    slug: "solar-verdict",
    title: "Solar Verdict — AI Solar Quote Engine",
    blurb:
      "Turns a rooftop into an instant, itemised solar quote. Built at Big Berlin Hack 2026, Reonic track.",
    tags: ["LLM", "RAG", "Next.js"],
    categories: ["agents", "energy"],
    year: "2026",
    repo: "https://github.com/Ahmed-Sohail2000/Big-Berlin-Hackathon-2026-Project-AI-Solar-Verdict",
    demo: "https://ai-solar-heliosense.vercel.app/",
  },
  {
    slug: "demand-side-response",
    title: "Demand-Side Response with ML",
    blurb:
      "Machine-learning models that shift energy load into off-peak windows for cost and carbon savings.",
    tags: ["Python", "Forecasting", "Energy"],
    categories: ["ml", "energy"],
    year: "2026",
    repo: "https://github.com/Ahmed-Sohail2000/Energy-Demand-Side-Response-with-Machine-Learning-Project",
    demo: null,
  },
  {
    slug: "reservation-voice-agent",
    title: "Restaurant Reservation Voice Agent",
    blurb:
      "A conversational voice agent that books restaurant reservations end to end, from greeting to confirmation.",
    tags: ["Voice AI", "Python", "LLM"],
    categories: ["agents"],
    year: "2025",
    repo: "https://github.com/Ahmed-Sohail2000/Big-Berlin-Hackathon-2025",
    demo: null,
  },
  {
    slug: "solar-eye",
    title: "Solar Eye — Panel Defect Detection",
    blurb:
      "A deep-learning classifier that flags solar-panel defects from thermal drone imagery.",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
    categories: ["ml", "energy"],
    year: "2025",
    repo: "https://github.com/Ahmed-Sohail2000/Solar-Eye-Project",
    demo: null,
  },
  {
    slug: "sun-sense",
    title: "Sun Sense — Solar Yield Forecasting",
    blurb:
      "Deep learning for accurate solar-energy generation forecasts across changing weather.",
    tags: ["Deep Learning", "Time Series"],
    categories: ["ml", "energy"],
    year: "2023",
    repo: "https://github.com/Ahmed-Sohail2000/Sun-Sense-Project",
    demo: null,
  },
];
