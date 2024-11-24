import React from "react";
import { motion, useAnimation } from "framer-motion";


const MotionScroller = () => {
  const phrases = ["Eat", "Drink", "Code", "Repeat"];
  
  return (
    <motion.div className="scroller-container">
      <motion.div
        className="scroller-track"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {phrases.map((phrase, index) => (
          <span className="scroller-text" key={index}>
            {phrase}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MotionScroller;
