import { HashLoader } from "react-spinners";

const Loading = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface">
    <HashLoader color="#e7503a" size={64} speedMultiplier={1.4} />
  </div>
);

export default Loading;
