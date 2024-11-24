// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}  // Initial state (offscreen with opacity 0)
      animate={{ opacity: 1, y: 0 }}   // Final state (visible with animation)
      transition={{ duration: 1 }}     // Animation duration
    >
      <p className="footer-text">
        Remember, at <strong>Coffee Bliss</strong>, we're here to support your coding journey, one cup at a time.
        Because great code deserves great coffee.
      </p>
    </motion.footer>
  );
};

export default Footer;
