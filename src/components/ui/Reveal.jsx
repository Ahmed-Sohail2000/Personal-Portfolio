import { createElement, useEffect, useRef, useState } from "react";

/**
 * Fades + rises its children into view once, when scrolled near the viewport.
 * Always resolves to visible — a safety timeout guarantees it, so content is
 * never stuck hidden if IntersectionObserver misbehaves.
 */
const Reveal = ({ as = "div", delay = 0, className = "", children, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    const t = setTimeout(show, 500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${shown ? "is-in" : ""} ${className}`,
      style: shown && delay ? { animationDelay: `${delay}ms` } : undefined,
      ...rest,
    },
    children
  );
};

export default Reveal;
