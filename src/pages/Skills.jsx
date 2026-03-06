import Tilt from "react-parallax-tilt";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

const Skills = () => {
  const skills = {
    Programming_Languages: ["Python", "C", "C++", "Java"],

    Frontend: ["HTML", "CSS", "JavaScript", "React.js"],

    Data_Analysis_ML: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],

    Databases: ["MySQL", "MongoDB"],

    Core_Concepts: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Database Management System (DBMS)",
    ],

    Tools: ["VS Code", "Git", "GitHub", "Jupyter Notebook"],
  };

  return (
    <div className="relative bg-gray-950 text-white min-h-screen pt-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-500">Skills</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Technologies and tools I use to build scalable and modern
          applications.
        </p>
      </section>

      {/* Skills Sections */}
      {Object.entries(skills).map(([category, items]) => (
        <section
          key={category}
          className="max-w-6xl mx-auto px-6 py-16 relative z-10"
        >
          <h2 className="text-2xl font-bold mb-10 text-center">{category}</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {items.map((skill) => (
              <Tilt
                key={skill}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionSpeed={1000}
                className="
                  backdrop-blur-xl
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-8
                  text-center
                  shadow-xl
                  hover:border-blue-500/40
                  transition duration-500
                "
              >
                <p className="text-lg font-medium tracking-wide">{skill}</p>
              </Tilt>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
