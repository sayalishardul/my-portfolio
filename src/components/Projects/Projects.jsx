import { useEffect, useRef } from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      const cards = sectionRef.current.querySelectorAll('.project-card');
      window.gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
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

  const projects = [
    {
      title: "Fake News Detection System",
      description:
        "Developed a full-stack Fake News Detection application using React.js and Django REST Framework with an ML classification pipeline (TF-IDF & Passive Aggressive Classifier) achieving ~99.47% accuracy. Features JWT authentication, role-based admin dashboard, prediction analytics with charts, and history export to PDF/CSV.",
      tags: ["Python", "Django", "React.js", "Scikit-learn", "JWT", "Chart.js"],
      github: "https://github.com/sayalishardul",
      live: "#",
    },
    {
      title: "Bank Onboarding – MIS Reporting Module",
      description:
        "Developed MIS reporting module with 5 categories and 15+ sub-reports for onboarding, products, documents, transactions, and audits with dynamic multi-criteria filtering and export tools.",
      tags: ["React.js", "REST APIs", "MySQL", "JavaScript"],
      github: "https://github.com/sayalishardul",
      live: "#",
    },
    {
      title: "Microfinance Management System (Microfins)",
      description:
        "Developed large-scale financial system with 100+ modules covering account management, transactions, loans, compliance, 113+ views, and financial calculation engines.",
      tags: ["Django 5.2.1", "Python", "MySQL", "Tailwind CSS", "jQuery", "AJAX"],
      github: "https://github.com/sayalishardul",
      live: "#",
    },
    {
      title: "Pothole Detection System",
      description:
        "Built ML model for pothole detection achieving 15% accuracy improvement using 10,000+ labeled samples with role-based access control and Flutter mobile UI.",
      tags: ["Python", "YOLOv7", "Flutter", "Firebase"],
      github: "https://github.com/sayalishardul",
      live: "#",
    },
    {
      title: "Task Management System",
      description:
        "Developed a secure Task Management REST API using Python, Django REST Framework, PostgreSQL, and JWT Authentication with role-based authorization.",
      tags: ["Django", "Python", "REST APIs", "PostgreSQL", "JWT", "Postman"],
      github: "https://github.com/sayalishardul",
      live: "#",
    },
    {
      title: "Student Management System",
      description:
        "Developed web application with role-based access control (Admin, Teacher, Student) and CRUD operations using Django's built-in auth system.",
      tags: ["Django", "Python", "MySQL", "HTML", "CSS", "Bootstrap"],
      github: "https://github.com/sayalishardul",
      live: "#",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative px-6 py-28 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Portfolio Work
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Projects built across Python, Django, React, and ML as detailed in my resume.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-600/50 hover:bg-white hover:shadow-2xl"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 text-cyan-600 shadow-sm">
                    <FiFolder size={24} />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition hover:border-cyan-600 hover:text-cyan-600"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition hover:border-cyan-600 hover:text-cyan-600"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>
              </div>

              <div className="relative pt-4 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-cyan-600/20 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700"
                    >
                      {tag}
                    </span>
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

export default Projects;
