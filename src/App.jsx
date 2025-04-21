import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300"
  >
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="text-gray-300 leading-relaxed">{children}</div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">Ryan Jo</h1>
          <p className="text-xl text-gray-400">CS @ Stevens Institute of Technology</p>
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
          className="text-center mt-20 text-gray-500 text-sm"
        >
          © 2025 Ryan Jo. Built with React + TailwindCSS + framer-motion
        </motion.footer>
      </div>
    </div>
  );
}
