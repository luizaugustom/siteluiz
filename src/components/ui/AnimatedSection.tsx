"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const defaultTransition = {
  duration: 0.5,
  staggerChildren: 0.08,
  when: "beforeChildren",
};

const reducedTransition = { duration: 0 };

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof typeof motion;
  variants?: typeof defaultVariants;
  transition?: typeof defaultTransition;
  once?: boolean;
};

export function AnimatedSection({
  children,
  className,
  id,
  as = "section",
  variants = defaultVariants,
  transition = defaultTransition,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.section;

  return (
    <Component
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={reducedMotion ? reducedMotionVariants : variants}
      transition={reducedMotion ? reducedTransition : transition}
    >
      {children}
    </Component>
  );
}
