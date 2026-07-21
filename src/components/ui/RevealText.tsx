// src/components/ui/RevealText.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
}

export function RevealText({ text, className }: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) return <h2 className={className}>{text}</h2>;

  return (
    <h2 className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className="mr-[0.18em] inline-block overflow-visible"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
          key={`${word}-${index}`}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}
