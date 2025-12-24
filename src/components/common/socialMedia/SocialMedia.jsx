import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://www.linkedin.com/in/ahmed-sohail/" },
  { icon: faGithub, link: "https://github.com/Ahmed-Sohail2000" },
  { icon: faYoutube, link: "https://www.youtube.com/channel/UCQ0kqwFMFfJftXCPuz-TKzA" },
  { icon: faEnvelope, link: "ahmedsohail02000@gmail.com"},
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-3">
      {socialIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Social media link"
          className="w-10 h-10 flex items-center justify-center rounded-md
                     bg-white text-[#001f3f]
                     hover:bg-[#003366] hover:text-white
                     transition-colors duration-300"
        >
          <FontAwesomeIcon icon={item.icon} className="text-lg" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
