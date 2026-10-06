import { useEffect, useRef } from "react";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiBootstrap,
} from "react-icons/si";
import { FiCode, FiServer, FiTool, FiDatabase, FiCpu } from "react-icons/fi";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      const cards = sectionRef.current.querySelectorAll('.skill-card');
      window.gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
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

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <FiCode className="text-cyan-600 text-xl" />,
      skills: [
        { name: "Python", icon: <SiPython className="text-amber-500" /> },
        { name: "Django", icon: <SiDjango className="text-emerald-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-amber-400" /> },
        { name: "React.js", icon: <SiReact className="text-cyan-500" /> },
        { name: "SQL", icon: <FiDatabase className="text-blue-600" /> },
      ],
    },
    {
      title: "Frontend & UI",
      icon: <FiCpu className="text-cyan-600 text-xl" />,
      skills: [
        { name: "HTML5 / CSS3", icon: <FiCode className="text-orange-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "jQuery", icon: <FiCode className="text-blue-500" /> },
      ],
    },
    {
      title: "Database & Backend",
      icon: <FiServer className="text-cyan-600 text-xl" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        { name: "REST APIs", icon: <FiCode className="text-cyan-600" /> },
        { name: "Authentication", icon: <FiServer className="text-emerald-600" /> },
        { name: "Session Mgmt", icon: <FiServer className="text-amber-600" /> },
        { name: "AJAX", icon: <FiCode className="text-purple-600" /> },
      ],
    },
    {
      title: "Concepts & Tools",
      icon: <FiTool className="text-cyan-600 text-xl" />,
      skills: [
        { name: "OOP", icon: <FiCpu className="text-cyan-600" /> },
        { name: "MVC Architecture", icon: <FiServer className="text-blue-600" /> },
        { name: "RBAC", icon: <FiCpu className="text-amber-600" /> },
        { name: "Git & GitHub", icon: <SiGit className="text-orange-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative px-6 py-28 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Technical Expertise
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
            Technical Skills
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Directly mapped from professional experience in Python, Django, REST APIs, databases, and frontend integration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card group relative rounded-3xl border border-slate-200 bg-slate-50/50 p-6 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-600/50 hover:bg-white hover:shadow-2xl"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm transition duration-300 hover:border-cyan-600/40 hover:shadow-md"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
