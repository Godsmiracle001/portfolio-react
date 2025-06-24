import React, { useState } from "react";

const projects = [
  {
    title: "XConfess — Anonymous Social Platform",
    link: "https://www.xconfess.ng",
    description:
      "A full-stack anonymous confession app built with HTML, Tailwind CSS, PHP, and MySQL. Features include confession feed, reaction system (emoji-based), private messaging, and real-time notifications. Implemented authentication, role-based access control, and rate limiting for security.",
    stack: ["HTML", "Tailwind CSS", "PHP", "MySQL"],
  },
  {
    title: "MPM VTU — Telecom & Utility Payment Platform",
    link: "https://www.mpmvtu.com.ng",
    description:
      "End-to-end VTU platform for airtime, data, electricity, and cable subscriptions. Built secure admin dashboard, customer billing, and real-time API integrations. Integrated with payment providers to automate purchase transactions.",
    stack: ["React", "Node.js", "API Integration", "Payment Automation"],
  },
  {
    title: "Sentiment Analysis on Restaurant Reviews",
    link: null,
    description:
      "Applied NLP techniques to classify customer reviews as positive or negative using Python, NLTK, and Scikit-learn. Visualized insights to help businesses improve service delivery.",
    stack: ["Python", "NLTK", "Scikit-learn", "NLP"],
  },
  {
    title: "2023 APC Presidential Aspirants Tweet Analysis",
    link: "https://github.com/Godsmiracle001",
    description:
      "Scraped Twitter data and performed sentiment analysis using NLP pipelines. Revealed sentiment trends per candidate to measure public perception.",
    stack: ["Python", "NLP", "Twitter API", "Data Visualization"],
  },
];

const campImages = Array.from({ length: 23 }, (_, i) => `/images/${i + 1}.jpg`);

const CodingCampGallery = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 bg-emerald-600 text-black font-semibold rounded-lg shadow hover:bg-emerald-500 transition mb-4"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Hide Camp Gallery" : "View Camp Gallery"}
      </button>
      {open && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {campImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Coding Camp 2023 - ${idx + 1}`}
              className="rounded shadow cursor-pointer object-cover h-28 w-full hover:scale-105 transition"
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
      )}
      {/* Modal for large image */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelected(null)}>
          <img
            src={campImages[selected]}
            alt={`Coding Camp 2023 - ${selected + 1}`}
            className="max-h-[80vh] max-w-[90vw] rounded shadow-lg border-4 border-emerald-500"
          />
        </div>
      )}
    </div>
  );
};

const Projects = () => (
  <div className="bg-black text-gray-300 min-h-screen flex flex-col">
    <header className="bg-gradient-to-r from-green-600 via-black to-green-600 text-white py-12 md:py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">My Projects</h1>
        <p className="text-lg md:text-xl mt-4">Explore some of my recent works</p>
        <a href="https://linktr.ee/GodsmiracleIbitayo" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-3 bg-green-600 text-black font-medium text-base md:text-lg rounded-lg hover:bg-green-500 transition flex items-center justify-center">
          Visit My Linktree
        </a>
      </div>
    </header>
    <main className="container mx-auto py-8 md:py-12 px-2 md:px-4 flex-1 w-full">
      <section className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-8">Highlighted Projects</h2>
      </section>
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {/* Coding Camp 2023 Project */}
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-between h-full col-span-1 sm:col-span-2">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">Coding Camp 2023 — Host & Instructor</h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              In 2023, I organized and led a hands-on coding camp for aspiring developers. The camp focused on foundational programming, web development, and collaborative problem-solving. Over 20 participants learned HTML, CSS, JavaScript, and teamwork through real-world projects and interactive sessions. The gallery below captures some of the best moments and achievements from the camp.
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              <li className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded">Event Organization</li>
              <li className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded">Teaching</li>
              <li className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded">Mentorship</li>
              <li className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded">Web Development</li>
              <li className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded">Teamwork</li>
            </ul>
            <CodingCampGallery />
          </div>
        </div>
        {/* Other Projects */}
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-500 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="inline-block bg-green-900 text-green-300 text-xs px-2 py-1 rounded mr-2 mb-2">{tech}</span>
                ))}
              </div>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-600 text-black font-medium text-sm md:text-lg rounded-lg hover:bg-green-500 transition mt-4 text-center w-full md:w-auto">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto text-center px-2">
        <p>&copy; 2025 Godsmiracle Ibitayo. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Projects; 