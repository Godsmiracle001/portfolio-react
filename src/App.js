import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import CV from "./CV";

function Home() {
  return (
    <main className="container mx-auto py-16 flex-1">
      <section className="text-center">
        <h2 className="text-4xl font-extrabold text-emerald-400 mb-4 drop-shadow">Welcome to My Portfolio</h2>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">Explore my work in data analysis, machine learning, and full stack development. Let's connect and make data work for you!</p>
        <a href="https://github.com/Godsmiracle001/" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-8 py-3 bg-emerald-500 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-emerald-400 transition-all duration-200">Explore My Works</a>
      </section>
    </main>
  );
}

function Navbar() {
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/cv", label: "CV" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-30 bg-gray-950/90 backdrop-blur border-b border-emerald-900 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-2">
        <div className="flex items-center gap-3">
          <img src={process.env.PUBLIC_URL + "/mimi.png"} alt="Logo" className="w-10 h-10 rounded-full border-2 border-emerald-400 shadow" />
          <span className="text-xl font-bold text-emerald-400 tracking-wide">Godsmiracle</span>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-emerald-400 mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-emerald-400 mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-emerald-400 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4 md:gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-3 py-1 rounded transition-all duration-150 ${location.pathname === link.to ? "bg-emerald-500 text-black font-bold shadow" : "text-gray-300 hover:text-emerald-400 hover:bg-gray-800"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-gray-950/95 border-t border-emerald-900`}> 
        <ul className="flex flex-col items-center gap-2 py-4 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full">
              <Link
                to={link.to}
                className={`block w-full px-4 py-2 rounded transition-all duration-150 text-center ${location.pathname === link.to ? "bg-emerald-500 text-black font-bold shadow" : "text-gray-300 hover:text-emerald-400 hover:bg-gray-800"}`}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-emerald-700 via-gray-900 to-emerald-700 text-white py-14 shadow-lg">
          <div className="container mx-auto flex flex-col items-center text-center">
            <img src={process.env.PUBLIC_URL + "/mimi.png"} alt="Godsmiracle Ibitayo" className="w-32 h-32 rounded-full border-4 border-emerald-400 mb-4 shadow-xl" />
            <h1 className="text-5xl font-extrabold text-emerald-400 drop-shadow mb-2">Godsmiracle Ibitayo</h1>
            <p className="text-xl text-gray-200 mt-2 font-medium">Data Scientist | Full Stack Web Developer | Technical Tutor</p>
            <a href="https://linktr.ee/GodsmiracleIbitayo" target="_blank" rel="noopener noreferrer" className="inline-block mt-5 px-6 py-2 bg-emerald-500 text-black font-semibold text-lg rounded-full shadow hover:bg-emerald-400 transition-all duration-200">Visit My Linktree</a>
          </div>
        </header>
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
        <footer className="bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-gray-400 py-8 mt-12 border-t border-emerald-900 shadow-inner">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div>
              <p className="text-lg font-semibold text-emerald-400">&copy; 2025 Godsmiracle Ibitayo</p>
              <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="https://github.com/Godsmiracle001" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition"><svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg></a>
              <a href="mailto:ibitayogodsmiracle@gmail.com" className="hover:text-emerald-400 transition"><svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 4.5h21v15h-21v-15zm19.5 1.5l-9 7.5-9-7.5v12h18v-12zm-9 6l9-7.5h-18l9 7.5z"/></svg></a>
              <a href="https://www.xconfess.ng" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition"><svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">XC</text></svg></a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
