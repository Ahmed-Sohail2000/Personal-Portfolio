import { useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="relative p-6 bg-[#001f3f] rounded-xl my-2 flex overflow-hidden shadow-md transition-transform hover:scale-105"
    >
      {/* Hover bar */}
      <div
        className={`bg-white-900 absolute left-0 top-0 h-full transition-all duration-300 ${
          mouseHover ? "w-1" : "w-0"
        }`}
      />

      {/* Content */}
      <div className="ms-3">
        <p className="text-lg font-semibold text-white pb-1">
          {role?.title}
        </p>
        <p className="text-sm text-white">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
