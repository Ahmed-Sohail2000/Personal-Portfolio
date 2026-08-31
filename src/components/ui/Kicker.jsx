const Kicker = ({ children, className = "" }) => (
  <span
    className={`flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted ${className}`}
  >
    <span className="h-0.5 w-6 flex-none bg-accent" aria-hidden="true" />
    {children}
  </span>
);

export default Kicker;
