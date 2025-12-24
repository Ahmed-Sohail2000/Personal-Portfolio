import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <HashLoader
        color="#001f3f"
        size={80}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default Loading;
