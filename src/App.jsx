import { motion } from "framer-motion";

const Card = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-gray-800/60 border border-gray-700 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
  >
    <h2 className="text-2xl font-semibold mb-3 text-white">{title}</h2>
    <div className="text-gray-300 text-[16px] leading-relaxed">{children}</div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Ryan Jo</h1>
          <p className="text-xl text-gray-400">CS @ Stevens Institute of Technology</p>
        </motion.header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Card title="About Me">
            I’m a CS student interested in firmware engineering, software development, and research in
            browser automation tools. I’m currently building a GitHub commit automation extension.
          </Card>

          <Card title="Projects">
            <ul className="list-disc list-inside space-y-1">
              <li>GitHub Commit Automation Tool</li>
              <li>Skip List in Java</li>
              <li>3D Rendering with OpenGL</li>
            </ul>
          </Card>

          <Card title="Experience">
            Summer 2025 Research with Dr. Eman Alomar on automation tools using GitHub, VSCode, and Java.
          </Card>

          <Card title="Skills">
            <ul className="list-disc list-inside space-y-1">
              <li>Languages: Java, Python, C, JavaScript</li>
              <li>Tools: VSCode, Git, FastAPI</li>
              <li>CS Topics: Data Structures, OOP, Web Dev</li>
            </ul>
          </Card>

          <Card title="Contact">
            <p>📧 ryanjo@example.com</p>
            <p>💼 linkedin.com/in/ryanjo</p>
            <p>💻 github.com/ryanjo</p>
          </Card>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 mt-16 text-sm"
        >
          © 2025 Ryan Jo. Built with ❤️ React + TailwindCSS
        </motion.footer>
      </div>
    </div>
  );
}
