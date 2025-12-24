import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "AI Engineering",
    description:
      "Designing and deploying intelligent systems using LLMs, AI agents, and modern machine learning pipelines.",
  },
  {
    id: 2,
    title: "RAG & LLM Pipelines",
    description:
      "Building retrieval-augmented generation solutions for document intelligence, search, and question answering.",
  },
  {
    id: 3,
    title: "n8n Automation Workflows",
    description:
      "Developing scalable n8n workflows that automate business processes and integrate AI with APIs and tools.",
  },
];

const Profession = () => {
  return (
    <section
      id="services"
      className="bg-white py-24 mt-24"   // 👈 SECTION SHIFTED DOWN
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center md:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f]">
            What I Do
          </h2>
        </div>
        {/* Right Side – Cards */}
        <div className="flex flex-col gap-5">
          {rolesData.map((role) => (
            <Roles key={role.id} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profession;
