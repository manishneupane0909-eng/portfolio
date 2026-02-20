import React, { useState } from "react";

const TABS = ["About", "Projects", "Experience", "Skills", "Education", "Honors", "Contact"];

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
  const [activeTab, setActiveTab] = useState("About");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }
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
    <div className="min-h-screen bg-black text-gray-200">
      {/* Tab bar */}
      <nav className="sticky top-0 z-50 bg-black/95 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {activeTab === "About" && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <img
                src="profile.png"
                alt="Manish Neupane"
                className="mx-auto rounded-full border-2 border-gray-600 w-32 h-32 object-cover mb-6"
              />
              <h1 className="text-3xl font-bold text-white mb-2">Manish Neupane</h1>
              <p className="text-gray-400 font-medium mb-2">Physics × Computer Science</p>
              <p className="text-gray-500 max-w-xl mx-auto mb-6">
                Building production systems from physics research—from 80% faster lab pipelines to 99% uptime autonomous fleets
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="mailto:manishneupane0909@gmail.com"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://github.com/manishneupane0909-eng"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/manish-neupane-380a65189"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                I architect solutions for complex systems—whether optimizing neural networks under physical constraints or scaling lab automation to production. This interdisciplinary foundation gives me an edge in ML research, scientific computing, and data-intensive applications where rigorous problem-solving meets scalable engineering.
              </p>
            </div>
          </div>
        )}

        {activeTab === "Projects" && (
          <div className="animate-fade-in space-y-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <h3 className="font-bold text-lg text-white mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                <ul className="ml-4 list-disc text-gray-400 space-y-1 mb-4 text-sm">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Experience" && (
          <div className="animate-fade-in space-y-6">
            {experience.map((role) => (
              <div
                key={role.role}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800 border-l-4 border-l-cyan-500"
              >
                <h3 className="font-bold text-lg text-white">{role.role}</h3>
                <p className="text-cyan-400 text-sm mb-3">{role.org} • {role.time}</p>
                <ul className="ml-4 list-disc text-gray-400 space-y-2 text-sm">
                  {role.desc.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Skills" && (
          <div className="animate-fade-in grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([cat, arr]) => (
              <div
                key={cat}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800"
              >
                <h3 className="font-bold text-white mb-3">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {arr.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Education" && (
          <div className="animate-fade-in p-6 rounded-xl bg-gray-900 border border-gray-800">
            <h3 className="font-bold text-xl text-white mb-2">B.S. Physics & Computer Science</h3>
            <p className="text-cyan-400 mb-4">South Dakota State University • Expected May 2026</p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-gray-300 font-medium">Relevant coursework:</span> Data Structures, Machine Learning, Software Engineering, Cloud Computing, Computational Physics, Mathematical Physics, Quantum Mechanics, Statistical Mechanics
            </p>
          </div>
        )}

        {activeTab === "Honors" && (
          <div className="animate-fade-in p-6 rounded-xl bg-gray-900 border border-gray-800">
            <ul className="space-y-3">
              {recognition.map((r) => (
                <li key={r} className="flex items-start gap-3 text-gray-400">
                  <span className="text-cyan-400 mt-0.5">★</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Contact" && (
          <div className="animate-fade-in max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl bg-gray-900 border border-gray-800"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </button>
              {formStatus && (
                <p className={`mt-4 text-center text-sm ${formStatus.includes("Thank you") ? "text-green-400" : "text-cyan-400"}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        )}
      </main>

      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800 mt-8">
        © {new Date().getFullYear()} Manish Neupane
      </footer>
    </div>
  );
}
