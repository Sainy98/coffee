import React from "react";
import { motion } from "framer-motion";


const EatDrinkCode = () => {
  const cardVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const items = [
    { title: "Eat", img: "https://th.bing.com/th/id/OIP.ptf_yzOvhGe4HJEALGUtWgHaHv?rs=1&pid=ImgDetMain", description: "Fuel up with delicious meals." },
    { title: "Drink", img: "https://th.bing.com/th/id/OIP.vQCOsa1oEW8Trnf4b23vVQHaHa?rs=1&pid=ImgDetMain", description: "Stay hydrated with coffee or tea." },
    { title: "Code", img: "https://th.bing.com/th/id/OIP.WNNs51me7vYZP9MLLmhsPwHaHa?rs=1&pid=ImgDetMain", description: "Write clean and efficient code." },
  ];

  return (
    <div className="edc-container">
      {items.map((item, index) => (
        <motion.div
          className="edc-card"
          key={index}
          whileHover="hover"
          variants={cardVariants}
        >
          <img src={item.img} alt={item.title} className="edc-image" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default EatDrinkCode;
