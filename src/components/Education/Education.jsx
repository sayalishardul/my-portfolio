import { useEffect, useRef } from "react";
import { FiBookOpen, FiCalendar, FiAward } from "react-icons/fi";

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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

  const educationData = [
    {
      degree: "Bachelor of Engineering – Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2024",
      description: "CGPA: 7.23",
      highlights: [
        "Focused on core computer science and engineering principles.",
      ],
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "MSBTE",
      period: "2021",
      description: "Percentage: 89.23%",
      highlights: [
        "Completed with distinction.",
      ],
    },
    {
      degree: "HSC – Maharashtra State Board",
      institution: "State Board",
      period: "2019",
      description: "Percentage: 58.62%",
      highlights: [],
    },
    {
      degree: "SSC – Maharashtra State Board",
      institution: "State Board",
      period: "2017",
      description: "Percentage: 85.40%",
      highlights: [],
    },
  ];

  const certifications = [
    "Python Full Stack Development – QSpiders Training Institute, Wakad",
    "Developer and Technology Virtual Experience Programme – Accenture Forage",
    "Generative AI – LinkedIn Learning",
    "AI Tools & ChatGPT Workshop – Be10x",
  ];

  return (
    <section id="education" ref={sectionRef} className="relative px-6 py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Academic Background & Credentials
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
            Education & Certifications
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-cyan-600/30 ml-3 sm:ml-6 space-y-12 mb-20">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              <div className="absolute -left-[17px] top-1.5 h-8 w-8 rounded-full border-2 border-cyan-600 bg-white flex items-center justify-center text-cyan-600 shadow-md">
                <FiBookOpen size={14} />
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition duration-300 hover:border-cyan-600/50 hover:shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-600 font-semibold text-lg mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                    <FiCalendar className="text-cyan-600" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-slate-800 font-bold mb-2">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900">Certifications & Training</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition duration-300 hover:border-cyan-600/50 hover:shadow-2xl"
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-cyan-600 shadow-sm">
                <FiAward size={22} />
              </div>
              <div>
                <p className="text-slate-800 font-medium">{cert}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
