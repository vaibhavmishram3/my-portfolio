import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          <span className="font-bold text-white bg-clip-text text-transparent">
            Vaibhav
          </span>
          <span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative transition duration-300 ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  }`
                }
              >
                {link.name}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          className="hidden md:block px-5 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
        >
          Hire Me
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-white/10 px-6 py-4 space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block transition ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2 text-center rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Hire Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
