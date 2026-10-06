import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const highlights = [
    {
      number: "1.5+",
      label: "Years Experience",
      description: "Python & Django Development",
    },
    {
      number: "4+",
      label: "Roles & Internships",
      description: "Trust Fintech, Aroma, CloudCredits, Heuristic",
    },
    {
      number: "5+",
      label: "Major Projects",
      description: "Banking, Financial & Microfinance systems",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative px-6 py-28 bg-slate-50 overflow-hidden">
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Get to know me
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
            Career Summary
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
            <p>
              Python Developer with <span className="text-cyan-600 font-semibold">1.5 years of experience</span> in backend development using Django and RESTful APIs. Currently working at <span className="text-slate-900 font-medium">Trust Fintech Limited</span> on banking and financial systems, including MIS reporting and onboarding platforms.
            </p>
            <p>
              Skilled in API development, database design, authentication systems, and React.js integration. Strong focus on scalable architecture, performance optimization, and secure application development based in Pune.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="rounded-full border border-cyan-600/20 bg-cyan-50 px-5 py-2 text-sm text-cyan-700 font-medium">
                📍 Pune, India
              </div>
              <div className="rounded-full border border-cyan-600/20 bg-cyan-50 px-5 py-2 text-sm text-cyan-700 font-medium">
                📞 7498265417
              </div>
              <div className="rounded-full border border-cyan-600/20 bg-cyan-50 px-5 py-2 text-sm text-cyan-700 font-medium">
                ✉️ sayalishardul088@gmail.com
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-600/50 hover:shadow-2xl"
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="text-4xl font-extrabold text-cyan-600 sm:text-5xl">
                    {item.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
