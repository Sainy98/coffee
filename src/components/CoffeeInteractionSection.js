import React from "react";
import { motion } from "framer-motion";
const coffeeQuotes = [
  {
    text: "Life happens. Coffee helps.",
    image: "https://th.bing.com/th/id/OIP.tbaakk-HMYP4s2GBZpw8-AHaEo?rs=1&pid=ImgDetMain",
  },
  {
    text: "Code without coffee is just a bug waiting to happen.",
    image: "https://th.bing.com/th/id/OIP.aqokXtHHYdxYJ0CQa3VhkQHaE7?w=626&h=417&rs=1&pid=ImgDetMain",
  },
  {
    text: "Espresso yourself before you wreck yourself!",
    image: "https://th.bing.com/th/id/OIP.L8xINavXlzCVBWjLdiXH_wAAAA?w=425&h=282&rs=1&pid=ImgDetMain",
  },
  {
    text: "Coffee: The programmer's productivity hack.",
    image: "https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?cs=srgb&dl=aroma-aromatic-art-434213.jpg&fm=jpg",
  },
];

const CoffeeInteractiveSection = () => {
  return (
    <div className="coffee-section">
      <h2 className="coffee-title">☕ Coffee & Code Vibes</h2>

      <div className="coffee-cards">
        {coffeeQuotes.map((quote, index) => (
          <motion.div
            key={index}
            className="coffee-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
                        
            }}

            whileHover={{
        scale: 1.1,
    
        transition: { type: "spring", stiffness: 30 },
      }}
            whileTap={{ scale: 1.95 }}
          >
            <img src={quote.image} alt="Coffee" className="coffee-image" />
            <p className="coffee-quote">{quote.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeInteractiveSection;
