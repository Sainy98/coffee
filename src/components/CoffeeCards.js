import React, { useRef } from 'react';
import { gsap } from 'gsap';


const CoffeeCard = ({ imageUrl }) => {
  const imageRef = useRef(null);

  // Function to handle mouse move
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const imageRect = imageRef.current.getBoundingClientRect();
    const centerX = imageRect.left + imageRect.width / 2;
    const centerY = imageRect.top + imageRect.height / 2;

    const offsetX = (clientX - centerX) / 20;
    const offsetY = (clientY - centerY) / 20;

    // GSAP animation for 3D effect
    gsap.to(imageRef.current, {
      rotationX: -offsetY,
      rotationY: offsetX,
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // Function to reset the image transform when mouse leaves
  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div
      className="coffee-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Coffee"
        className="interactive-image"
      />
    </div>
  );
};

const CoffeeCards = () => {
  const coffeeImages = [
    "https://img.freepik.com/premium-photo/white-cup-hot-coffee-served-wooden-table-cafe_39688-543.jpg", // Example Coffee Image 5
    "https://th.bing.com/th/id/OIP.qiIYTfhQYHIag0KUFXfLwQHaFj?w=800&h=600&rs=1&pid=ImgDetMain", // Example Coffee Image 2
    "https://th.bing.com/th/id/OIP.laEDHwW2cOAyAKIj1SqCgQHaE-?w=626&h=420&rs=1&pid=ImgDetMain", // Example Coffee Image 3
    "https://th.bing.com/th/id/OIP.pkcrKCok8qxKhDBODXPjXgHaE7?w=626&h=417&rs=1&pid=ImgDetMain", // Example Coffee Image 4
  ];

  return (
    <div className="coffee-cards-container">
      {coffeeImages.map((image, index) => (
        <CoffeeCard key={index} imageUrl={image} />
      ))}
    </div>
  );
};

export default CoffeeCards;
