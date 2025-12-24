import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import ai from "/src/assets/images/ai.jpg";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative mx-4 lg:mx-0 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white shadow-2xl p-6 sm:p-10 md:p-16 lg:p-20 xl:p-28"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image */}
          
          <div className="w-80 h-96 sm:w-96 sm:h-[32rem] overflow-hidden rounded-xl shadow-lg">
          <div className="w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-xl shadow-lg">
            <img 
            
            src = {ai}

            alt="ai specialization"
              
              className="w-full h-full object-cover bg-gray-100"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-snug text-[#001f3f]">
            AI Engineer | Solar & Energy Engineer
          </h2>
        
          <div className="text-sm sm:text-base lg:text-lg text-gray-600 space-y-3">
            <p>
            I build advanced AI solutions with a focus on Large Language Models (LLMs) and autonomous AI agents. 
            My work spans designing intelligent systems that reason, plan, and interact seamlessly with users and external tools.
            </p>
            <p>
            I develop AI agents, retrieval-augmented generation (RAG) pipelines, and end-to-end machine learning workflows—from 
            data preparation and model training to deployment and production monitoring.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-[#001f3f] hover:bg-[#003366] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              View Projects
            </a>

            <a
              href=".\resume.pdf"
              download
              className="border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download CV
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="px-6 py-3 bg-[#001f3f] rounded-lg shadow-md">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
