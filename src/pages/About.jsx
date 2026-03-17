import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import PImg from "../assets/ProfileImg.jpg";

const About = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen pt-24">
      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-500">Me</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Passionate AI & Machine Learning Developer building intelligent,
          data-driven applications with scalable and efficient software
          architecture.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT - IMAGE / CARD */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 blur-3xl opacity-20 rounded-3xl"></div>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={1000}
              className="relative inset-0 w-72 h-72 rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-800 shadow-xl"
            >
              <img
                src={PImg}
                alt="Profile"
<<<<<<< HEAD
                className="w-full h-full object-cover object-top"
=======
                className="absolute inset-0 w-full h-full object-cover object-top"
>>>>>>> e4065bf (first deploy)
              />
            </Tilt>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">I'm Vaibhav Mishra</h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a dedicated Full Stack Developer with a strong passion for
            building responsive, scalable, and high-performance web
            applications. I enjoy solving real-world problems using modern
            technologies like React, Node.js, and MongoDB.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            My goal is to create meaningful digital experiences that are fast,
            accessible, and visually appealing. I continuously learn and adapt
            to new technologies to stay ahead in the tech industry.
          </p>

          <div className="flex gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg font-medium transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / JOURNEY */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-blue-500">Journey</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">🎓 Education</h3>

              <p className="text-gray-300 font-medium">
                MCA (AI & ML) — JECRC University (2025–2027)
              </p>

              <p className="text-gray-400 text-sm mt-2">
                BCA — University of Rajasthan (2021–2024)
              </p>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Specializing in Artificial Intelligence, Machine Learning, Data
                Structures, and Scalable Software Development.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">💻 Development</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Designed and developed intelligent full-stack applications
                including AI-powered systems, REST APIs, dashboards, and
                responsive web platforms.
              </p>

              <p className="text-gray-500 text-xs mt-2">
                Focused on scalability • Clean Architecture • Performance
                Optimization
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">🚀 Future Vision</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Aspiring to become an AI-driven Software Engineer building
                intelligent, large-scale, and impactful systems.
              </p>

              <p className="text-gray-500 text-xs mt-2">
                AI Innovation • Scalable Systems • Real-World Impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
