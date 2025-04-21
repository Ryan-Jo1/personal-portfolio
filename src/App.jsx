import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300"
  >
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <div className="text-gray-800 dark:text-gray-300 leading-relaxed">{children}</div>
  </motion.div>
);


export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#1a1a1a] text-black dark:text-white px-6 py-12 transition duration-500">
      <div className="max-w-6xl mx-auto">

        {/* Header with buttons */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">Ryan Jo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">CS @ Stevens Institute of Technology</p>

          {/* Resume & Dark Mode Toggle */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="/resume.pdf"
              download
              className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              📄 Download Resume
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition"
            >
              {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </motion.header>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <Section title="About Me">
            I’m a CS student interested in firmware engineering, software development, and research in
            browser automation tools. I am an incoming research assistant at Stevens focusing on a GitHub
            commit automation Chrome extension.
          </Section>

          <Section title="Projects">
            <ul className="list-disc list-inside space-y-1">
              <li>Posture correction website with integrated study helping tools</li>
              <li>TravelCompanion app for travelers – deployed using Docker</li>
              <li>Food searcher and food information database website</li>
            </ul>
          </Section>

          <Section title="Experience">
            Summer 2025 Research with Dr. Eman Alomar on automation tools using GitHub, VSCode, and Java.
          </Section>

          <Section title="Skills">
            <ul className="list-disc list-inside space-y-1">
              <li>Languages: Java, Python, JavaScript</li>
              <li>Tools: VSCode, Git, FastAPI, Docker</li>
              <li>CS Topics: Data Structures, OOP, Web Dev</li>
            </ul>
          </Section>

          <Section title="Contact">
            <p>📧 rjo1109ny@gmail.com</p>
            <p>💼 <a className="underline hover:text-indigo-300 transition" href="https://www.linkedin.com/in/ryan-jo-728b2531b/" target="_blank">LinkedIn</a></p>
            <p>💻 <a className="underline hover:text-indigo-300 transition" href="https://github.com/Ryan-Jo1" target="_blank">GitHub</a></p>
          </Section>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-20 text-gray-600 dark:text-gray-500 text-sm"
        >
          © 2025 Ryan Jo. Built with React + TailwindCSS + framer-motion
        </motion.footer>
      </div>
    </div>
  );
}
