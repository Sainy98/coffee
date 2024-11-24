import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const CoffeeDevModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const funnyContent = [
    "Coffee first, then deploy.",
    "Bug fixing powered by caffeine.",
    "Behind every great developer is a mug of coffee.",
    "Java is not just a language; it's also my drink.",
    "Code + Coffee = Infinite Loop",
  ];

  return (
    <div className="modal-container">
      {/* Button to trigger modal */}
      <motion.div
        className="open-button"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ☕ Click For Coffee Jokes
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal"
            layoutId="modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2>Developer Coffee Jokes</h2>
              <motion.button
                className="close-button"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.2 }}
              >
                ✖
              </motion.button>
            </div>

            <motion.ul
              className="content-list"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {funnyContent.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoffeeDevModal;
