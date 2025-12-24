import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative bg-white text-[#0b1f4b]">
      {/* Navbar */}
      <NavBar />

      {/* Page content */}
      <Outlet />

      {/* Footer with navy background */}
      <div className="bg-[#0b1f4b] text-white">
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Main;
