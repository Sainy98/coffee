import React from "react";
import { motion } from "framer-motion";


const testimonials = [
  {
    quote: "Coffee Bliss saved my project deadline!",
    name: "Alice",
    role: "Front-End Developer",
  },
  {
    quote: "I was stuck in an infinite loop, but their Espresso Loop pulled me out.",
    name: "Bob",
    role: "Back-End Developer",
  },
  {
    quote: "Best place to unwind and refactor code.",
    name: "Charlie",
    role: "Full Stack Developer",
  },
];

const Testimonials = () => {
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Cascading effect
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const cardVariants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
  };

  const hoverEffect = {
    scale: 1.1,
    rotateY: 10,
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 120,
    },
  };

  const textParallax = {
    hover: {
      y: [0, -5, 0], // Moves text up and down slightly
      transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <motion.div
      className="testimonials-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          className="testimonial-card"
          key={index}
          variants={cardVariants}
          whileHover={hoverEffect}
        >
          <motion.p className="quote" variants={textParallax}>
            {testimonial.quote}
          </motion.p>
          <motion.p className="name" variants={textParallax}>
            - {testimonial.name}
          </motion.p>
          <motion.p className="role" variants={textParallax}>
            {testimonial.role}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Testimonials;
