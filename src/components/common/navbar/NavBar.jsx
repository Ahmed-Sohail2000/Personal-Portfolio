import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "../../ui/ThemeToggle";
import Button from "../../ui/Button";

const navItems = [
  { id: 1, name: "About", to: "profile" },
  { id: 2, name: "Work", to: "projects" },
  { id: 3, name: "Services", to: "services" },
  { id: 4, name: "Testimonials", to: "testimonials" },
];

const scrollProps = { smooth: true, duration: 600, spy: true, offset: -96 };

const Wordmark = ({ onClick }) => (
  <ScrollLink
    to="introduction"
    smooth
    duration={600}
    offset={-200}
    onClick={onClick}
    className="cursor-pointer font-display text-[15px] font-semibold tracking-[-0.01em] text-ink"
  >
    Ahmed<span className="text-accent">.</span>Sohail
  </ScrollLink>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-[71.25rem] items-center justify-between px-6 sm:px-10">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.to}
              {...scrollProps}
              activeClass="!text-ink after:scale-x-100"
              className="relative cursor-pointer font-mono text-[12.5px] tracking-[0.03em] text-ink-soft transition-colors duration-150 ease-snap after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-150 hover:text-ink"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ScrollLink to="contact" {...scrollProps} className="hidden sm:block">
            <Button as="span" variant="ghost">
              Contact
            </Button>
          </ScrollLink>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-line text-ink lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-line bg-surface px-6 pb-6 pt-2 sm:px-10 lg:hidden">
          {navItems.map((item, i) => (
            <ScrollLink
              key={item.id}
              to={item.to}
              {...scrollProps}
              onClick={() => setOpen(false)}
              className="flex cursor-pointer items-center justify-between border-b border-line py-[18px] font-display text-[19px] font-medium text-ink"
            >
              {item.name}
              <span className="font-mono text-[11px] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </ScrollLink>
          ))}
          <ScrollLink to="contact" {...scrollProps} onClick={() => setOpen(false)}>
            <Button as="span" variant="primary" className="mt-5 w-full">
              Contact &rarr;
            </Button>
          </ScrollLink>
        </div>
      )}
    </header>
  );
};

export default NavBar;
