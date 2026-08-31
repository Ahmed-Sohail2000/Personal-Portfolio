import { animateScroll } from "react-scroll";
import SocialMedia from "../socialMedia/SocialMedia";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="border-t border-line bg-surface-alt py-11">
    <div className="mx-auto flex max-w-[71.25rem] flex-col justify-between gap-8 px-6 sm:flex-row sm:items-start sm:px-10">
      <div>
        <span className="font-display text-[15px] font-semibold text-ink">
          Ahmed<span className="text-accent">.</span>Sohail
        </span>
        <p className="mt-2 max-w-[18rem] font-mono text-[11px] leading-relaxed text-ink-muted">
          AI Engineer — LLMs, agents, and applied intelligent systems.
        </p>
        <p className="mt-6 font-mono text-[10.5px] text-ink-muted">
          © {year} Ahmed Sohail. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 sm:items-end">
        <SocialMedia />
        <button
          type="button"
          onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
          className="font-mono text-[11px] text-ink-soft transition-colors duration-150 ease-snap hover:text-ink"
        >
          Back to top ↑
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
