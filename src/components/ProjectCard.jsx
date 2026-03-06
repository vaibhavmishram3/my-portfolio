import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="project-card"
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default ProjectCard;
