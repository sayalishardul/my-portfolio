import { useState, useEffect, useRef } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "986fb7f9-e5be-41b3-89e9-af2200a1a944",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-28 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Get in touch
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
            Contact Me
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Get in touch for professional opportunities, collaboration, or inquiries.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Sayali Shardul
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Python Developer based in Pune, specializing in Django, REST APIs, and React.js.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 text-cyan-600 shadow-sm">
                    <FiMail size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a
                      href="mailto:sayalishardul088@gmail.com"
                      className="text-lg font-semibold text-slate-900 hover:text-cyan-600 transition"
                    >
                      sayalishardul088@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 text-cyan-600 shadow-sm">
                    <FiPhone size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <a
                      href="tel:7498265417"
                      className="text-lg font-semibold text-slate-900 hover:text-cyan-600 transition"
                    >
                      7498265417
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 text-cyan-600 shadow-sm">
                    <FiMapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-lg font-semibold text-slate-900">
                      Pune, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-xl shadow-slate-200/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FiCheckCircle className="text-cyan-600 text-6xl mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 max-w-sm">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:outline-none shadow-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:outline-none shadow-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sayali, I'd like to discuss an opportunity..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:outline-none shadow-sm transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 py-4 font-semibold text-white shadow-lg shadow-cyan-600/20 transition duration-300 hover:bg-cyan-700 disabled:opacity-50"
                >
                  <FiSend />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
