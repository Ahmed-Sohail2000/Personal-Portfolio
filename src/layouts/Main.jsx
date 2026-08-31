import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => (
  <div className="relative min-h-screen bg-surface text-ink">
    <NavBar />
    <Outlet />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Main;
