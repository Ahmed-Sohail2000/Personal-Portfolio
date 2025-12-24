import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

const NAVY = "#061049";

const navItems = [
  { id: 1, name: "About", url: "profile" },
  { id: 2, name: "Projects", url: "projects" },
  { id: 3, name: "Services", url: "services" },
];

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${
        position > 50 ? "bg-[#061049] shadow-lg" : "bg-[#061049]"
      }`}
    >
      <div className="navbar flex justify-between mx-auto content text-white">
        {/* Logo */}
        <div className="flex items-center">
          <ScrollLink
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center cursor-pointer"
          >
            <img src={logo} className="h-8 sm:h-14 rounded-xl" alt="logo" />
            <p className="text-2xl sm:text-3xl ms-3 font-semibold text-white">
            
            </p>
          </ScrollLink>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex menu menu-horizontal font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.url}
                smooth={true}
                duration={800}
                offset={-140} // Adjust for navbar height
                className="px-5 py-3 mx-1 rounded-md text-white hover:bg-blue-900 transition cursor-pointer"
                activeClass="bg-[#061049]"
                spy={true}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={900}
          offset={-140}
          className="btn btn-sm sm:btn-lg ml-4 bg-white text-[#061049] hover:bg-gray-200 border-none cursor-pointer"
        >
          Contact
        </ScrollLink>
      </div>
    </div>
  );
};

export default NavBar;
