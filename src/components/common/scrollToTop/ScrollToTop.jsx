import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  const options = {
    duration: 500,
    smooth: true,
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop(options);
  };

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-end relative sm:me-10 z-10 transition-all">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 me-5 w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition transform duration-500 ease-in-out hover:scale-125 hover:cursor-pointer text-white
          ${
            position < 200
              ? "scale-0 opacity-0"
              : "scale-100 opacity-100 bg-[#0b1f4b] hover:bg-[#162d5c]"
          }`}
      >
        <FontAwesomeIcon icon={faAngleUp} size="2xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
