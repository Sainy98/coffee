import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const SlideInText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideAnimation = useSpring({
    transform: inView ? 'translateX(0)' : 'translateX(-100%)',
    opacity: inView ? 1 : 0,
    config: { tension: 170, friction: 26 },
  });

  return (
    <div ref={ref} className="slide-container">
      <animated.div style={slideAnimation}>
        <h1>Welcome to Coffee Bliss for Developers</h1>
      </animated.div>
    </div>
  );
};

export default SlideInText;
