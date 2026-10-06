import { useEffect, useRef } from "react";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      const items = sectionRef.current.querySelectorAll('.tree-branch');
      window.gsap.fromTo(
        items,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const experiences = [
    {
      title: "Python Developer",
      company: "TRUST FINTECH LIMITED | Pune",
      period: "June 2025 – Present",
      description:
        "Developing Django-based backend systems and RESTful APIs for banking and financial applications.",
      highlights: [
        "Built MIS Reporting Module with 5 categories and 15+ sub-reports with dynamic multi-criteria filtering.",
        "Implemented export functionality supporting PDF, CSV, Excel, Word, HTML, and TXT formats.",
        "Integrated React.js frontend with backend APIs for Bank Onboarding platform.",
        "Optimized performance using caching and implemented SLA/TAT tracking and audit logging.",
      ],
    },
    {
      title: "Cloud AI Intern",
      company: "CLOUDCREDITS | Jaipur",
      period: "Mar 2025 – Apr 2025",
      description:
        "Developed AWS Lambda functions using Python to automate workflows and built serverless cloud solutions.",
      highlights: [
        "Developed AWS Lambda functions using Python to automate workflows.",
        "Built serverless solutions and integrated AWS services.",
        "Participated in code reviews, documentation, and Agile development practices.",
      ],
    },
    {
      title: "Python Developer (Part-Time)",
      company: "AROMA BRAND SOLUTIONS | Pune",
      period: "Nov 2024 – Feb 2025",
      description:
        "Developed backend modules and CRUD operations using Django framework.",
      highlights: [
        "Developed backend modules and CRUD operations using Django framework.",
        "Implemented user authentication and role-based access control.",
        "Improved application security and data handling efficiency.",
      ],
    },
    {
      title: "Python Django Intern",
      company: "HEURISTIC TECHNOPARK | Nashik",
      period: "Jan 2023 – Mar 2023",
      description:
        "Developed web applications using Python and Django with authentication systems.",
      highlights: [
        "Developed web applications using Python and Django.",
        "Implemented user authentication and authorization systems.",
        "Collaborated with the team on backend development, debugging, and testing.",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="relative px-6 py-28 bg-slate-50 overflow-hidden">
      <div className="absolute left-10 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute right-10 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none animate-pulse" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Professional Background
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 bg-gradient-to-r from-slate-900 via-cyan-900 to-cyan-600 bg-clip-text text-transparent">
            Experience Tree
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-600 via-cyan-400 to-cyan-600/30 hidden md:block shadow-[0_0_15px_rgba(8,145,178,0.3)]" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="tree-branch relative flex flex-col md:flex-row items-center">

                  {/* Left Side Content (for even index on desktop) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-left' : 'md:order-2 md:pl-16 md:text-left'} mb-8 md:mb-0`}>
                    <div className="group relative rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.01] hover:border-cyan-600/60 hover:shadow-2xl">
                      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-600 font-semibold text-lg mt-1">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                            <FiCalendar className="text-cyan-600" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-6 text-left">
                          {exp.description}
                        </p>

                        <ul className="space-y-2 text-left">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                              <span className="text-cyan-600 mt-0.5 text-xl font-bold group-hover:scale-125 transition-transform">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex h-14 w-14 rounded-full border-4 border-white bg-gradient-to-br from-cyan-500 to-cyan-700 items-center justify-center text-white shadow-xl shadow-cyan-500/30 z-10">
                    <FiBriefcase size={20} />
                  </div>

                  <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'} hidden md:block`} />

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
