"use client"
import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ItemLayoutProps {
  children: ReactNode;
  className?: string;
}

const ItemLayout = ({ children, className }: ItemLayoutProps) => {
  const [hovered, setHovered] = useState(false);

  const baseShadow = "inset 0 17px 5px -9px rgba(254,254,91,0.05)";
  const hoverShadow = "5px 5px 20px 0px rgba(254,254,91,0.3)";

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        // core styles
        "p-8 rounded-xl flex items-center justify-center border border-[rgb(var(--accent))]/30 border-solid space-y-8",
        // ensure z-index works and shadows are visible outside the cell
        "relative overflow-visible pointer-events-auto transition-transform",
        // toggle z-index when hovered so the card sits above siblings
        hovered ? "z-10" : "z-0",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? `${baseShadow}, ${hoverShadow}` : baseShadow,
        transition: "box-shadow 0.25s ease, transform 0.15s ease",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
