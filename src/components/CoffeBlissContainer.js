import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CoffeeBlissContainer = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.coffee-bliss-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: false,
        },
      });

      tl.fromTo(
        '.coffee-bliss-content',
        { scale: 0, opacity: 1, rotationX: -90 },
        { scale: 1, opacity: 1, rotationX: 0, duration: 1.5 }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="coffee-bliss-container">
      <div className="coffee-bliss-content">
        <div className="coffee-bliss-header">
          <h2>Our Java Beans</h2>
          <p>
            At Coffee Bliss, we understand that coding and coffee go hand in
            hand. Our java beans are specially roasted to fuel your marathon
            coding sessions and help you debug those pesky bugs.
          </p>
        </div>
        <div className="content">
          <div className="box">
            <h3>Bug-Free Brews</h3>
            <img
              src="https://th.bing.com/th/id/R.956d7f47f33ba9428f7aac683c96e2fc?rik=%2f7KCWnWY5B7R6w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-rHIV8LGCPkc%2fT7edxn8tu_I%2fAAAAAAAAC94%2f4arKek8wZ3g%2fs1600%2fCoffee%2bBeans%2bImages%2b3.jpg&ehk=TOemYObxUu6hMTVfiXSmzT5U5zgDAztY2ZiPmHsdk1c%3d&risl=&pid=ImgRaw&r=0"
              alt="bug"
            />
            <p>
              Our coffee is guaranteed to be 100% bug-free, unlike your code!
              Sip on our expertly brewed coffee and watch as your error messages
              magically disappear (results may vary).
            </p>
          </div>
          <div className="box">
            <h3>Debugging Drinks</h3>
            <img
              src="https://th.bing.com/th/id/OIP.X_TCCZ-zcxybbOPC2TpccwHaE8?w=910&h=607&rs=1&pid=ImgDetMain"
              alt="bug"
            />
            <p>
              Need help debugging? Try our "Debugger Delight" blend. It’s
              scientifically proven* to reduce the number of bugs in your code
              by at least 42%. (*By scientifically proven, we mean it just
              tastes really good.)
            </p>
          </div>
          <div className="box">
            <h3>The Stack Overflow Special</h3>
            <img
              src="https://stockmedia.cc/food/coffeebeans.jpg"
              alt="bug"
            />
            <p>
              Feeling stuck on a problem? Order our "Stack Overflow Special" and
              get unlimited refills until you find the solution. Remember,
              there's no problem that a good cup of coffee and a community of
              developers can't solve together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeBlissContainer;
