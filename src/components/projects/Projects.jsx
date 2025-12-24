import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import drone from "/src/assets/drone.jpg";
import chatbot from "/src/assets/chatbot.jpg";
import agent from "/src/assets/agent.jpg";

const projectsData = [
  {
    title: "Solar Eye Project",
    description:
      "AI-powered solar panel inspection using drone-based thermal imagery.",
    image: drone,
    link: "https://github.com/Ahmed-Sohail2000/Solar-Eye-Project",
  },
  {
    title: "AskIQ AI Helper App",
    description:
      "Developed an autonomous LLM capable of planning and executing tasks.",
    image: chatbot,
    link: "https://github.com/Ahmed-Sohail2000/AskIQ-AI-Helper-App-Chingu-Voyage-54-tier3-team-35",
  },
  {
    title: "AI Voice Agent for Reservation & Booking",
    description:
      "Developed an AI voice agent to handle reservations and bookings efficiently.",
    image: agent,
    link: "https://github.com/Ahmed-Sohail2000/Big-Berlin-Hackathon-2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#001f3f]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Projects
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="max-w-sm rounded-xl bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Wrapper */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#001f3f] mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6
                             bg-[#001f3f] text-white font-semibold
                             px-5 py-3 rounded-lg
                             hover:bg-[#003366] hover:gap-3
                             transform hover:scale-105 transition-all duration-300"
                >
                  Case Study
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
