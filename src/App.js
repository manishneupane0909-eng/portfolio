import React from "react";

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
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      {/* Header */}
      <header className="mb-10 text-center">
        <img
          src="profile.png"
          alt="Manish Neupane"
          className="mx-auto mb-4 rounded-full border-2 border-gray-300 w-28 h-28 object-cover"
        />
        <h1 className="text-4xl font-bold mb-2">
          Manish Neupane
        </h1>
        <div className="text-lg text-gray-700 font-medium mb-2">
          Physics × Computer Science
        </div>
        <div className="text-gray-600 max-w-2xl mx-auto mb-4">
          Building production systems from physics research—from 80% faster lab pipelines to 99% uptime autonomous fleets
        </div>
        <div className="space-x-4 text-sm">
          <a
            href="mailto:manishneupane0909@gmail.com"
            className="text-blue-600 hover:underline"
          >
            manishneupane0909@gmail.com
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://github.com/manishneupane0909-eng"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://www.linkedin.com/in/manish-neupane-380a65189"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Positioning Statement */}
      <section className="mb-10 p-4 bg-gray-50 border-l-4 border-gray-400">
        <p className="text-gray-800 leading-relaxed">
          I architect solutions for complex systems—whether optimizing neural networks under physical constraints or scaling lab automation to production. This interdisciplinary foundation gives me an edge in ML research, scientific computing, and data-intensive applications where rigorous problem-solving meets scalable engineering.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Selected Projects</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.name}>
              <div className="font-bold text-lg mb-1">{p.name}</div>
              <div className="text-gray-700 mb-2">{p.desc}</div>
              <ul className="ml-6 list-disc text-gray-800 space-y-1 mb-2">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <a
                href={p.link}
                className="text-blue-600 text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Experience</h2>
        {experience.map((role) => (
          <div key={role.role} className="mb-6">
            <div className="font-bold text-lg">{role.role}</div>
            <div className="text-gray-600 text-sm mb-2">{role.org} • {role.time}</div>
            <ul className="ml-6 list-disc text-gray-800 space-y-1">
              {role.desc.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(skills).map(([cat, arr]) => (
            <div key={cat}>
              <span className="font-semibold text-gray-900">{cat}:</span>
              <span className="ml-2 text-gray-700">{arr.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Education</h2>
        <div>
          <div className="font-bold">B.S. Physics & Computer Science</div>
          <div className="text-gray-600">South Dakota State University • Expected May 2026</div>
          <div className="text-gray-700 mt-1">
            Relevant coursework: Data Structures, Machine Learning, Software Engineering, Cloud Computing, Computational Physics, Mathematical Physics, Quantum Mechanics, Statistical Mechanics
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Honors & Recognition</h2>
        <ul className="ml-6 list-disc text-gray-800 space-y-1">
          {recognition.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} Manish Neupane
      </footer>
    </div>
  );
}