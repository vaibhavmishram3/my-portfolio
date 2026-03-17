import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Vaibhav<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Passionate AI & Machine Learning Developer building intelligent,
            data-driven applications with scalable and efficient software
            architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-white transition">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/vaibhavmishram3"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhavmishram3/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/+918302979123"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Vaibhav Mishra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
