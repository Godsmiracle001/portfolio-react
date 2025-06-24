import React from "react";

const CV = () => (
  <div className="bg-black text-gray-300 min-h-screen flex flex-col items-center py-6 md:py-12 px-2 md:px-4">
    <div className="w-full max-w-3xl bg-gray-900 rounded-lg shadow-lg p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-green-500 mb-2">GODSMIRACLE IBITAYO O.</h1>
        <p className="text-base md:text-lg text-gray-400 mb-2">Data Scientist | Full Stack Web Developer | Technical Tutor</p>
        <p className="text-gray-400 text-sm md:text-base">📍 Abuja, Nigeria</p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 text-xs md:text-sm">
          <span>📞 09117505795 | 08159895901</span>
          <span>📧 ibitayogodsmiracle@gmail.com</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-2 text-xs md:text-sm">
          <a href="https://github.com/Godsmiracle001" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">GitHub</a>
          <a href="https://www.xconfess.ng" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Portfolio: xconfess.ng</a>
          <a href="https://www.mpmvtu.com.ng" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Portfolio: mpmvtu.com.ng</a>
        </div>
      </div>
      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-2">Professional Summary</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Versatile and results-oriented Data Scientist and Full Stack Web Developer with over 3 years of experience building scalable, high-performance web applications and data solutions. Proficient in Python, JavaScript, SQL, and modern frameworks including React.js, NestJS, and Tailwind CSS. Adept at delivering client-focused solutions through data-driven decision making, robust API architecture, and user-centric design. Known for mentorship, creative problem-solving, and shipping clean, maintainable code. Thrives in fast-paced environments and passionate about leveraging technology to solve real-world problems.
        </p>
      </section>
      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-2">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-green-400">Web Development</h3>
            <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
              <li>Languages: HTML5, CSS3, JavaScript (ES6+), PHP, TypeScript</li>
              <li>Frontend: React.js, Next.js, Tailwind CSS</li>
              <li>Backend: Node.js, NestJS, Express.js, PHP</li>
              <li>Databases: PostgreSQL, MySQL, Supabase, Firebase</li>
              <li>Other: Git & GitHub, RESTful APIs, JWT Auth, WebSockets</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-400">Data Science & Analytics</h3>
            <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
              <li>Python Libraries: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, NLTK</li>
              <li>Concepts: Predictive Modeling, Supervised/Unsupervised Learning, Data Cleaning, EDA, NLP</li>
              <li>Tools: Power BI, Jupyter, Google Colab, Excel, SQL</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-green-400">DevOps & Software Practices</h3>
          <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
            <li>API Development & Integration, Security & Access Control, Agile Development, Version Control, Deployment Automation</li>
          </ul>
        </div>
      </section>
      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-green-400">Freelance Data Analyst & Full Stack Developer</h3>
          <p className="text-gray-400 text-xs md:text-sm">Upwork / LinkedIn | Remote | Jan 2023 – Present</p>
          <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
            <li>Built and deployed production-ready full stack applications including user dashboards, authentication, billing modules, and messaging systems.</li>
            <li>Delivered data analytics dashboards to clients with insights that improved user engagement by 25–40%.</li>
            <li>Developed and deployed RESTful APIs, ensuring secure communication with frontend clients.</li>
            <li>Implemented full-stack features using React, Next.js, Node.js, and PostgreSQL.</li>
            <li>Maintained code quality with Git and CI/CD practices.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-green-400">Machine Learning Tutor</h3>
          <p className="text-gray-400 text-xs md:text-sm">Jahlics Technology | Kogi State | Aug 2021 – Oct 2022</p>
          <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
            <li>Taught over 50 students the fundamentals of machine learning, algorithms, and practical model building.</li>
            <li>Designed course materials and real-world case studies using Python libraries and supervised project evaluations.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-green-400">JAMB Examination Tutor (Mathematics & Physics)</h3>
          <p className="text-gray-400 text-xs md:text-sm">Dominion Tutorials | Lokoja | Jan 2022 – Feb 2023</p>
          <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
            <li>Trained over 100 students in quantitative reasoning and physics principles.</li>
            <li>Applied active learning strategies and customized tutoring techniques to maximize student success.</li>
          </ul>
        </div>
      </section>
      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-2">Projects</h2>
        <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
          <li>
            <span className="font-semibold text-green-400">XConfess — Anonymous Social Platform:</span> <a href="https://www.xconfess.ng" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">xconfess.ng</a><br />
            Full-stack anonymous confession app (HTML, Tailwind CSS, PHP, MySQL). Features: confession feed, emoji reactions, private messaging, real-time notifications, authentication, role-based access, rate limiting.
          </li>
          <li>
            <span className="font-semibold text-green-400">MPM VTU — Telecom & Utility Payment Platform:</span> <a href="https://www.mpmvtu.com.ng" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">mpmvtu.com.ng</a><br />
            End-to-end VTU platform for airtime, data, electricity, and cable subscriptions. Secure admin dashboard, customer billing, real-time API integrations, payment automation.
          </li>
          <li>
            <span className="font-semibold text-green-400">Sentiment Analysis on Restaurant Reviews:</span> NLP classification of customer reviews using Python, NLTK, and Scikit-learn. Visualized insights for business improvement.
          </li>
          <li>
            <span className="font-semibold text-green-400">2023 APC Presidential Aspirants Tweet Analysis:</span> Twitter data scraping and sentiment analysis using NLP pipelines. Revealed sentiment trends per candidate.
          </li>
        </ul>
      </section>
      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-2">Education</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-green-400">B.Sc. in Computer Science</h3>
          <p className="text-gray-400 text-xs md:text-sm">Federal University Lokoja, Kogi State</p>
          <p className="text-gray-400 text-xs md:text-sm">Graduated: December 2022</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-green-400">National Diploma – Computer Networking & System Security</h3>
          <p className="text-gray-400 text-xs md:text-sm">CITIgate Polytechnic, Ibadan</p>
          <p className="text-gray-400 text-xs md:text-sm">Graduated: December 2014</p>
        </div>
      </section>
      {/* Certifications & Training */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-2">Certifications & Training</h2>
        <ul className="list-disc pl-6 text-gray-300 text-sm md:text-base">
          <li>Introduction to Data Science in Python – Coursera</li>
          <li>Responsive Web Design – FreeCodeCamp</li>
          <li>Backend API Development – Udemy</li>
        </ul>
      </section>
      {/* Referees */}
      <section className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-2">Referees</h2>
        <div className="text-gray-300 text-sm md:text-base">
          <p><span className="font-semibold">Dr. Emeka Ogbuju</span><br />Ag. HOD, Computer Science, Federal University Lokoja<br />📞 09030797424</p>
        </div>
      </section>
    </div>
  </div>
);

export default CV; 