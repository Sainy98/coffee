import React from "react";
import "./App.css";
import AnimatedSpriteScroll from "./components/AnimationCoffe";
import SlideInText from "./components/SlideInText";
import CoffeeBlissContainer from "./components/CoffeBlissContainer";
import CoffeeMugPerks from "./components/CoffeeMug";
import Testimonials from "./components/Testimonial";
import MotionScroller from "./components/MotionScroller";
import CoffeeDevModal from "./components/CoffeeDev";
import Footer from "./components/Footer";

import CoffeeCards from "./components/CoffeeCards";
import EatDrinkCode from "./components/EatDrink";

function App() {


  return (
    <div>
      <div className="header">
      <SlideInText/>
      
      </div>
      <MotionScroller/>
      <AnimatedSpriteScroll />

      <CoffeeBlissContainer/>

      <CoffeeMugPerks/>
<EatDrinkCode/>
      <Testimonials/>
      <CoffeeDevModal/>
      <CoffeeCards/>
  <Footer/>

    </div>

  
  );
}

export default App;
