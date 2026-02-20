import React, { useState } from "react";

const skills = {
  Programming: ["Python", "C/C++", "MATLAB", "JavaScript"],
  "Scientific Computing": ["NumPy", "SciPy", "PyTorch", "CUDA"],
  "Software Engineering": ["Git", "React", "Docker", "REST APIs"],
  "Physics Instrumentation": ["PPMS", "VSM", "Lab Automation"],
};

const projects = [
  {
    name: "Physics-Informed Neural Networks for PDEs",
    desc: "Neural PDE solver embedding physical constraints directly into loss functions for better generalization on scientific problems.",
    bullets: [
      "Achieved 25% speedup over classical finite-difference methods on nonlinear diffusion equations",
      "Implemented custom loss functions enforcing conservation laws during gradient descent",
      "Reduced compute time by 40% in lab materials simulation workflows",
    ],
    link: "https://github.com/manishneupane0909-eng/pinn-pde-solver",
  },
  {
    name: "Automated Magnetometry Analysis Pipeline",
    desc: "End-to-end Python framework for batch processing VSM (Vibrating Sample Magnetometer) datasets in high-throughput materials discovery.",
    bullets: [
      "Automated data cleaning, curve fitting, and report generation for 500+ sample measurements",
      "Accelerated analysis cycle from 2 days to 4 hours—80% reduction",
      "Deployed in active Heusler alloy screening research at SDSU",
    ],
    link: "https://github.com/manishneupane0909-eng/magnetometry-automation",
  },
  {
    name: "SecurePath Optimization Platform",
    desc: "Full-stack React application for secure route planning with integrated ML-based risk scoring.",
    bullets: [
      "Built RESTful backend handling 10,000+ API requests during testing",
      "Implemented JWT authentication and encrypted data transmission",
      "Deployed production-ready Docker containerized environment",
    ],
    link: "https://github.com/manishneupane0909-eng/SecurePath-solution",
  },
];

const experience = [
  {
    role: "Research Assistant, Magnetic Materials Laboratory",
    org: "South Dakota State University",
    time: "2022–Present",
    desc: [
      "Conducted experimental magnetic characterization of Heusler alloys using PPMS (Physical Property Measurement System) and VSM",
      "Built reproducible Python pipelines processing 500+ magnetometry datasets—accelerating analysis by 80%",
      "Presented experimental findings at American Physical Society (APS) conferences in 2023 and 2024",
    ],
  },
  {
    role: "Robotics Fleet Operator",
    org: "Starship Technologies",
    time: "2023–Present",
    desc: [
      "Manage autonomous delivery robot fleet serving 15,000+ campus users with 99% uptime",
      "Developed automated incident response protocols reducing recovery latency by 35%",
      "Monitor real-time telemetry and coordinate with engineering on system improvements",
    ],
  },
  {
    role: "Manufacturing Technician",
    org: "Daktronics",
    time: "Summer 2022",
    desc: [
      "Assembled LED display scoreboards including wire harness integration and power supply installation",
      "Performed testing and calibration of LED panels to ensure display quality standards",
      "Supported production line troubleshooting and quality control processes",
    ],
  },
];

const recognition = [
  "APS March Meeting Presenter (2023, 2024)—magnetic materials research",
  "Undergraduate Research Scholarship, SDSU Physics Department",
];

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    
    // Create mailto link as fallback
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:manishneupane0909@gmail.com?subject=${subject}&body=${body}`;
    
    setFormStatus("Opening your email client...");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormStatus("Thank you! I'll get back to you soon.");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MN
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header id="about" className="mb-16 text-center animate-fade-in">
          <div className="relative inline-block mb-6">
            <img
              src="profile.png"
              alt="Manish Neupane"
              className="mx-auto rounded-full border-4 border-white shadow-xl w-36 h-36 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              ✓
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Manish Neupane
          </h1>
          <div className="text-xl text-gray-700 font-medium mb-3">
            Physics × Computer Science
          </div>
          <div className="text-gray-600 max-w-2xl mx-auto mb-6 text-lg">
            Building production systems from physics research—from 80% faster lab pipelines to 99% uptime autonomous fleets
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:manishneupane0909@gmail.com"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/manishneupane0909-eng"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manish-neupane-380a65189"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn
            </a>
          </div>
        </header>

        {/* Positioning Statement */}
        <section className="mb-16 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500 shadow-md hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-800 leading-relaxed text-lg">
            I architect solutions for complex systems—whether optimizing neural networks under physical constraints or scaling lab automation to production. This interdisciplinary foundation gives me an edge in ML research, scientific computing, and data-intensive applications where rigorous problem-solving meets scalable engineering.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Selected Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <div
                key={p.name}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:-translate-y-2 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {p.name}
                </div>
                <div className="text-gray-600 mb-4 text-sm leading-relaxed">{p.desc}</div>
                <ul className="ml-4 list-disc text-gray-700 space-y-1 mb-4 text-sm">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="hover:text-gray-900 transition-colors">{b}</li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  className="inline-flex items-center text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors group-hover:gap-2 gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((role, idx) => (
              <div
                key={role.role}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-500 hover:border-purple-500 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="font-bold text-xl mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {role.role}
                </div>
                <div className="text-blue-600 text-sm mb-3 font-medium">
                  {role.org} • {role.time}
                </div>
                <ul className="ml-4 list-disc text-gray-700 space-y-2">
                  {role.desc.map((l, i) => (
                    <li key={i} className="hover:text-gray-900 transition-colors">{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([cat, arr], idx) => (
              <div
                key={cat}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300 group"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors block mb-3">
                  {cat}
                </span>
                <div className="flex flex-wrap gap-2">
                  {arr.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm hover:from-blue-100 hover:to-purple-100 transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
            <div className="font-bold text-2xl mb-2 text-gray-900">B.S. Physics & Computer Science</div>
            <div className="text-blue-600 text-lg mb-4 font-medium">
              South Dakota State University • Expected May 2026
            </div>
            <div className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Relevant coursework:</span> Data Structures, Machine Learning, Software Engineering, Cloud Computing, Computational Physics, Mathematical Physics, Quantum Mechanics, Statistical Mechanics
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Honors & Recognition
          </h2>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
            <ul className="space-y-3">
              {recognition.map((r, idx) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <span className="text-blue-600 font-bold mt-1">★</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Send Message
              </button>
              {formStatus && (
                <p className={`mt-4 text-center ${formStatus.includes("Thank you") ? "text-green-600" : "text-blue-600"}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 text-center text-gray-500 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Manish Neupane. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
