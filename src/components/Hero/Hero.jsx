import { useEffect, useRef } from "react";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (window.gsap) {
      window.gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 bg-gradient-to-b from-slate-100/50 via-slate-50 to-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
            Sayali Shardul
            <br />

            <span className="text-slate-500 font-bold">
              Python Full Stack Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Python Full Stack Developer with 1.5 years of experience in backend development using Django and RESTful APIs. Currently working at Trust Fintech Limited on banking and financial systems, MIS reporting, and onboarding platforms.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-600/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-700"
            >
              View My Projects
            </a>

            {/* Download Resume */}
            <a
              href="/Sayali Shardul.pdf"
              download="Sayali Shardul.pdf"
              className="rounded-full border-2 border-cyan-600 px-6 py-3 font-semibold text-cyan-600 transition duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:text-white"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-cyan-600 hover:text-cyan-600"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">

            <a
              href="https://github.com/sayalishardul"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl text-slate-600 transition hover:-translate-y-1 hover:text-slate-900"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sayali-shardul-2b02702b6"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-slate-600 transition hover:-translate-y-1 hover:text-cyan-600"
            >
              <FiLinkedin />
            </a>

          </div>

        </div>

        {/* Right Code Card */}
        <div className="flex justify-center">

          <div className="relative w-full max-w-md">

            {/* Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-cyan-500/15 blur-xl" />

            {/* Card */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50">

              {/* Window Buttons */}
              <div className="mb-8 flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-red-400" />

                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                <div className="h-3 w-3 rounded-full bg-green-400" />

              </div>

              {/* Code */}
              <div className="font-mono text-sm leading-8 text-slate-800">

                <p>
                  <span className="text-purple-600 font-semibold">
                    const
                  </span>{" "}
                  developer = {"{"}
                </p>

                <p className="pl-5">
                  name:{" "}
                  <span className="text-emerald-600 font-medium">
                    "Sayali Shardul"
                  </span>,
                </p>

                <p className="pl-5">
                  role:{" "}
                  <span className="text-emerald-600 font-medium">
                    "Python Developer"
                  </span>,
                </p>

                <p className="pl-5">
                  company:{" "}
                  <span className="text-emerald-600 font-medium">
                    "Trust Fintech"
                  </span>,
                </p>

                <p className="pl-5">
                  backend:{" "}
                  <span className="text-emerald-600 font-medium">
                    "Django & REST APIs"
                  </span>,
                </p>

                <p className="pl-5">
                  frontend:{" "}
                  <span className="text-emerald-600 font-medium">
                    "React.js"
                  </span>,
                </p>

                <p className="pl-5">
                  database:{" "}
                  <span className="text-emerald-600 font-medium">
                    "MySQL & PostgreSQL"
                  </span>,
                </p>

                <p>
                  {"}"}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-slate-400 transition hover:text-cyan-600"
      >
        <FiArrowDown />
      </a>

    </section>
  );
};

export default Hero;
