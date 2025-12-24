import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "1+ Yrs",
  },
  {
    id: 2,
    title: "AI Projects",
    description: "5+",
  },
  {
    id: 3,
    title: "Clients & Teams",
    description: "5+",
  },
];

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-16 px-4 lg:px-0"
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between text-center lg:text-left">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight text-[#001f3f]">
            Hello, I’m <br />
            <span className="block mt-2">Ahmed Sohail</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg my-6 text-gray-600">
            I’m an{" "}
            <span className="font-semibold text-[#001f3f]">AI Engineer</span>{" "}
            specializing in{" "}
            <span className="font-semibold text-[#001f3f]">
              Large Language Models (LLMs)
            </span>
            ,{" "}
            <span className="font-semibold text-[#001f3f]">AI Agents</span>, and
            intelligent systems. I build scalable, production-ready AI solutions
            that automate workflows, enhance decision-making, and create
            real-world impact.
          </p>

        </div>

        {/* Summary Stats */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <div className="grid grid-cols-3 gap-3">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} navy />
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-72 sm:w-80 xl:w-[420px] aspect-[4/5]">
          <img
            className="w-full h-full object-cover rounded-3xl shadow-2xl bg-white"
            src={person}
            alt="Ahmed Sohail portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
