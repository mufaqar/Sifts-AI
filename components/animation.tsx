"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Animation({
  children,
  variants,
  className = "",
}: {
  children: React.ReactNode;
  variants?: any;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
