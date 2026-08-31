import { createElement } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] font-mono text-[12.5px] font-medium uppercase tracking-[0.04em] transition-[transform,background-color,border-color,color] duration-150 ease-snap disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "h-11 px-5 border border-transparent bg-ink text-surface hover:bg-accent hover:text-white hover:-translate-y-px",
  ghost:
    "h-11 px-5 border border-line-strong bg-transparent text-ink hover:border-ink",
  link: "normal-case tracking-normal text-[12px] text-accent hover:text-ink",
};

const Button = ({ as = "button", variant = "primary", className = "", children, ...props }) =>
  createElement(
    as,
    {
      className: `${base} ${variants[variant] || variants.primary} ${className}`,
      ...props,
    },
    children
  );

export default Button;
