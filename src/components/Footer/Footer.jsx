import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 shadow-inner">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold tracking-wide text-slate-900"
            >
              Sayali<span className="text-cyan-600">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Python Developer | Django & React
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/sayalishardul"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-600 transition hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/sayali-shardul"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-600 transition hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
            >
              <FiLinkedin size={19} />
            </a>

            <a
              href="mailto:sayalishardul088@gmail.com"
              aria-label="Email"
              className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-600 transition hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
            >
              <FiMail size={19} />
            </a>

          </div>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
          >
            Back to top
            <FiArrowUp />
          </a>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">

          <p>
            © {currentYear} Sayali Shardul. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-cyan-600 font-medium">React</span>
            {" "}and{" "}
            <span className="text-cyan-600 font-medium">Vite</span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
