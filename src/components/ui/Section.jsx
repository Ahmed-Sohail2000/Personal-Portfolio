const Section = ({ id, alt = false, className = "", children }) => (
  <section
    id={id}
    className={`scroll-mt-24 py-20 sm:py-24 ${
      alt ? "bg-surface-alt" : "bg-surface"
    } ${className}`}
  >
    {children}
  </section>
);

export default Section;
