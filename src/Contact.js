import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // !!! IMPORTANT !!!
    // It is not recommended to store your EmailJS credentials directly in the code.
    // You should use environment variables to keep your credentials secure.
    // 1. Create a file named .env.local in the root of your project.
    // 2. Add your credentials to this file like this:
    //    REACT_APP_EMAILJS_SERVICE_ID=service_x2nhj5p
    //    REACT_APP_EMAILJS_TEMPLATE_ID=template_bejtoxy
    //    REACT_APP_EMAILJS_PUBLIC_KEY=iQOmEiGWg5O45Cv7c
    // 3. In your code, you would then access them like this:
    //    process.env.REACT_APP_EMAILJS_SERVICE_ID
    // 4. Make sure to add .env.local to your .gitignore file to avoid committing it.

    const serviceID = "service_x2nhj5p";
    const templateID = "template_bejtoxy";
    const publicKey = "iQOmEiGWg5O45Cv7c";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (err) => {
        console.log("FAILED...", err);
        alert("Failed to send the message. Please try again later.");
      }
    );
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-green-600 via-black to-green-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="text-xl mt-4">I'd love to hear from you!</p>
          <a href="https://linktr.ee/GodsmiracleIbitayo" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-3 bg-green-600 text-black font-medium text-lg rounded-lg hover:bg-green-500 transition flex items-center justify-center">
            Visit My Linktree
          </a>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4 flex-1">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-8">Feel free to reach out for collaborations, questions, or just a friendly chat!</p>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="mailto:ibitayogodsmiracle@gmail.com" className="text-green-600 hover:text-green-500 transition text-3xl">
              <span role="img" aria-label="email">✉️</span>
            </a>
            <a href="https://github.com/Godsmiracle001" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-500 transition text-3xl">
              <span role="img" aria-label="github">🐙</span>
            </a>
            <a href="https://www.kaggle.com/godsmiracleibitayo" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-500 transition text-3xl">
              <span role="img" aria-label="kaggle">📊</span>
            </a>
          </div>
        </section>
        <section className="max-w-2xl mx-auto">
          <form
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-6 text-center">
              Send Me a Message
            </h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-black font-medium text-lg rounded-lg hover:bg-green-500 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Godsmiracle Ibitayo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact; 