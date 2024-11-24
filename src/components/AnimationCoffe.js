import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedSpriteScroll = () => {
  useEffect(() => {
    const frameCount = 9; // Number of frames in the sprite sheet
    const offsetValue = 100; // Distance for each frame's scroll trigger

    gsap.to(".viewer", {
      backgroundPosition: `-${offsetValue * frameCount * 2}px 50%`,
      ease: `steps(${frameCount})`, // Stepped animation for sprite
      scrollTrigger: {
        trigger: ".scene",
        start: "top top", // Animation starts when .scene reaches the top of the viewport
        end: `+=${frameCount * offsetValue}`, // Ends after scrolling through all frames
        pin: true, // Pin the section during animation
        scrub: true, // Smooth scrolling link with animation
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
     
      <section className="scene section" id="sticky">
        <div className="viewer"></div>
      </section>

    </div>
  );
};

export default AnimatedSpriteScroll;
