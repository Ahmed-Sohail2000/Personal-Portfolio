import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-sohail/",
  },
  {
    icon: faGithub,
    label: "GitHub",
    link: "https://github.com/Ahmed-Sohail2000",
  },
  {
    icon: faYoutube,
    label: "YouTube",
    link: "https://www.youtube.com/channel/UCQ0kqwFMFfJftXCPuz-TKzA",
  },
  {
    icon: faEnvelope,
    label: "Email",
    link: "mailto:ahmedsohail02000@gmail.com",
  },
];

const SocialMedia = () => (
  <div className="flex items-center gap-2.5">
    {socialIcons.map((item) => {
      const external = item.link.startsWith("http");
      return (
        <a
          key={item.label}
          href={item.link}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-line text-ink-soft transition-[color,border-color,transform] duration-150 ease-snap hover:-translate-y-0.5 hover:border-ink hover:text-ink"
        >
          <FontAwesomeIcon icon={item.icon} className="text-base" />
        </a>
      );
    })}
  </div>
);

export default SocialMedia;
