const Roles = ({ role, last = false }) => (
  <div
    className={`h-full bg-raised p-7 transition-colors duration-150 ease-snap hover:bg-surface-alt ${
      last ? "" : "border-b border-line sm:border-b-0 sm:border-r"
    }`}
  >
    <span className="font-mono text-xs text-accent">{role.id}</span>
    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
      {role.title}
    </h3>
    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
      {role.description}
    </p>
  </div>
);

export default Roles;
