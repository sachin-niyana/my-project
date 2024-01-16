import React, { useEffect } from "react";
import moon from "../assets/img/png/moon.png";
import ninja from "../assets/img/png/ninja.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gsap = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("moon-img", {
      y: 0,
      scrollTrigger: {
        trigger: "moon-img",
        start: "top top",
        end: "100% 20%",
        markers: true,
        pin: true,
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <div className="position-relative overflow-hidden">
        <div className="leaves-set" id="leaves">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div>
          <img className="w-100 min-vh-100 moon-img" src={moon} alt="moon" />
          <img className="w-100 min-vh-100 ninja-img" src={ninja} alt="ninja" />
        </div>
      </div>
    </>
  );
};

export default Gsap;
