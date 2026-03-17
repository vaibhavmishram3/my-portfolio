import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import PImg from "../assets/ProfileImg.jpg";

const Home = () => {
  const projects = [
    {
      title: "AI-Based Student Performance Prediction System",
      description:
        "Built a machine learning model to predict student academic performance.",
    },
    {
      title: "Weather Forecast Website",
      description:
        "Real-time weather forecasting website with live API integration.",
    },
    {
      title: "Expense Tracker",
      description:
        "Full-stack expense tracking app with authentication & dashboard.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Vaibhav Mishra
            </span>
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
            MCA (AI & ML) Student | Web Developer | Python & C++ Programmer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
            I build responsive websites, develop intelligent systems using
            Machine Learning, and create scalable applications with clean,
            efficient code.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["React", "Node.js", "Python", "MongoDB", "AI/ML"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm rounded-full bg-blue-100 dark:bg-white/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-white/10 backdrop-blur-md"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-white/20 backdrop-blur-md hover:border-blue-500 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={1000}
            className="relative w-72 h-72 rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-800 shadow-xl"
          >
            <img
              src={PImg}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </Tilt>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Projects" },
            { value: "2+", label: "Years Learning" },
            { value: "8+", label: "Technologies" },
            { value: "100%", label: "Dedication" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-blue-500">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
