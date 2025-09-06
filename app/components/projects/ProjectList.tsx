"use client";
import React, { FC } from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

// Define the shape of a project (aligned to your data)
export type Project = {
  id: string | number;
  name: string;
  date: string | number | Date;
  demoLink: string;
  description?: string;
  [key: string]: unknown; // fallback for extra props
};

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center"
    >
      {projects.map((project) => (
        <ProjectLayout key={project.id} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
