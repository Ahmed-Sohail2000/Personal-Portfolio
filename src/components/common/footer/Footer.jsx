import SocialMedia from "../socialMedia/SocialMedia";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Name */}
        <p className="text-lg font-medium text-center md:text-left">
          Ahmed Sohail
        </p>

        {/* Social Media */}
        <div className="flex justify-center">
          <SocialMedia />
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/60 text-center md:text-right">
          © {copyrightYear} All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
