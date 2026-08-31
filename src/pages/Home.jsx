import Introduction from "../components/introduction/Introduction";
import Marquee from "../components/ui/Marquee";
import Profile from "../components/profile/Profile";
import Profession from "../components/profession/Profession";
import Projects from "../components/projects/Projects";
import Testimonial from "../components/testimonial/Testimonial";
import WorkTogether from "../components/workTogether/WorkTogether";
import Contact from "../components/contact/Contact";

const Home = () => (
  <>
    <Introduction />
    <Marquee />
    <Profile />
    <Profession />
    <Projects />
    <Testimonial />
    <WorkTogether />
    <Contact />
  </>
);

export default Home;
