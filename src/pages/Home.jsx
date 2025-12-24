import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Projects from "../components/projects/Projects";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative bg-white text-[#0b1f4b]">
      {/* Intro + Profile */}
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>

      {/* Profession */}
      <div className="bg-[#f5f7fa]">
        <Profession />
      </div>

      {/* Projects */}
      <div className="bg-white">
        <Projects />
      </div>

      {/* Social Proof */}
      <div className="bg-white">
        <Testimonial />
      </div>

      {/* Work Together */}
      <div className="bg-[#0b1f4b] text-white">
        <WorkTogether />
      </div>

      {/* Contact */}
      <div className="bg-[#0b1f4b] text-white">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
