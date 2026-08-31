const Tag = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-[3px] border border-line-strong px-2 py-0.5 font-mono text-[11px] tracking-[0.03em] text-ink-soft ${className}`}
  >
    {children}
  </span>
);

export default Tag;
