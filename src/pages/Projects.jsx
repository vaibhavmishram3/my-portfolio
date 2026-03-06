import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern responsive developer portfolio built using React and Tailwind CSS with smooth animations.",
      tech: ["React", "Tailwind", "Vite"],
      github: "#",
      live: "#",
    },
    {
      title: "College Data API",
      description:
        "RESTful API built using Node.js, Express, and MongoDB for managing college student records.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Expense Tracker",
      description:
        "Full-stack expense tracking application with authentication and dashboard analytics.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen pt-24">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          A collection of projects showcasing my development skills and problem-solving ability.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300 group"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white text-gray-400 transition"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white text-gray-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Projects;
