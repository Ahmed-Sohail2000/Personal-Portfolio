import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
      className={`fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-[3px] border border-line-strong bg-raised text-ink shadow-[3px_3px_0_var(--accent-soft)] transition-[opacity,transform,border-color] duration-200 ease-snap hover:border-ink ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default ScrollToTop;
