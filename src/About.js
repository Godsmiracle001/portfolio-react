import React from "react";

const webDevSkills = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "PHP"],
  },
  {
    category: "Databases & Auth",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "JWT Auth"],
  },
  {
    category: "Other",
    skills: ["Git & GitHub", "RESTful APIs", "WebSockets", "Deployment Automation"],
  },
];

const About = () => (
  <div className="bg-black text-gray-300 min-h-screen flex flex-col">
    <header className="bg-gradient-to-r from-green-600 via-black to-green-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-lg mt-4">Get to know more about my professional journey and passion for data.</p>
      </div>
    </header>
    <main className="container mx-auto py-12 px-4 flex-1">
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Hi, I'm Godsmiracle Ibitayo</h2>
        <p className="text-gray-400 text-lg mb-4">
          I specialize in uncovering insights from data, helping businesses make smarter decisions. With expertise in Python, SQL, Power BI, and Tableau, I'm passionate about transforming raw data into meaningful stories.
        </p>
        <p className="text-gray-400 text-lg">
          Beyond data, I enjoy mentoring aspiring professionals and exploring the frontiers of AI and machine learning.
        </p>
      </section>
      {/* Web Development Skillsets */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Web Development Skillsets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webDevSkills.map((group) => (
            <div key={group.category}>
              <h4 className="font-semibold text-green-400 mb-2">{group.category}</h4>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="bg-green-900 text-green-300 text-xs px-3 py-1 rounded shadow">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Education Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-green-500 mb-6">Education</h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-medium">Bachelor of Science (B.Sc) – Computer Science</p>
          <p>Federal University Lokoja, Lokoja, Kogi State</p>
          <p className="text-gray-400">Graduated: December 2022</p>
        </div>
      </section>
      {/* Skills Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-green-500 mb-6">Technical Skills</h3>
        <ul className="grid grid-cols-2 gap-6 text-lg">
          <li className="flex items-center">Python</li>
          <li className="flex items-center">SQL</li>
          <li className="flex items-center">Power BI</li>
          <li className="flex items-center">Tableau</li>
          <li className="flex items-center">Machine Learning</li>
          <li className="flex items-center">Data Visualization</li>
        </ul>
      </section>
      {/* Certifications */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-green-500 mb-6">Certifications</h3>
        <ul className="list-disc pl-6 text-lg">
          <li>Certified Data Analyst</li>
          <li>Power BI Specialist</li>
          <li>Python for Data Science</li>
        </ul>
      </section>
      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <a href="https://github.com/Godsmiracle001" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-green-600 text-black font-medium text-lg rounded-lg hover:bg-green-500 transition flex items-center justify-center">
          Explore My Work
        </a>
      </div>
    </main>
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Godsmiracle Ibitayo. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default About; 