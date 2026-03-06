import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Frontend */}
      <FaReact className="absolute text-blue-500 text-7xl top-20 left-10 opacity-20 float-medium" />
      <FaHtml5 className="absolute text-orange-600 text-6xl top-10 right-1/4 opacity-20 float-slow" />
      <FaCss3Alt className="absolute text-blue-400 text-6xl bottom-10 right-1/3 opacity-20 float-medium" />
      <FaJs className="absolute text-yellow-400 text-6xl bottom-32 right-24 opacity-20 float-slow" />
      <SiTailwindcss className="absolute text-cyan-400 text-6xl top-1/4 left-1/2 opacity-20 float-slow" />

      {/* Backend & DB */}
      <FaNodeJs className="absolute text-green-500 text-6xl bottom-24 left-20 opacity-20 float-slow" />
      <SiMongodb className="absolute text-green-400 text-6xl top-1/3 right-12 opacity-20 float-medium" />
      <FaDatabase className="absolute text-indigo-400 text-6xl bottom-1/4 left-1/4 opacity-20 float-slow" />

      {/* Programming */}
      <FaPython className="absolute text-yellow-500 text-6xl top-1/2 right-10 opacity-20 float-medium" />
      <FaJava className="absolute text-red-500 text-6xl bottom-20 left-1/3 opacity-20 float-slow" />

      {/* Tools */}
      <FaGitAlt className="absolute text-orange-500 text-6xl top-1/2 left-1/3 opacity-20 float-medium" />
      <FaGithub className="absolute text-gray-400 text-6xl top-16 right-16 opacity-20 float-slow" />

    </div>
  );
};


export default FloatingIcons;


