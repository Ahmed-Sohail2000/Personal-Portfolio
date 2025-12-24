// InformationSummary.jsx
const InformationSummary = ({ item }) => {
  return (
    <div className="bg-[#001f3f] text-white px-6 py-4 rounded-lg shadow-md flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-lg mt-2">{item.description}</p>
    </div>
  );
};

export default InformationSummary;
