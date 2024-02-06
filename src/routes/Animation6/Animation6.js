import React, { useState, useRef } from "react";
import leftArrow from "../../assets/Animation6/arrow-left.svg";
import rightArrow from "../../assets/Animation6/arrow-right.svg";
import gsap, { Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Animation6.scss";

const formula1 = [
  {
    title: "Warm Up Engines",
    image: `${require("../../assets/Animation6/image1.jpg")}`,
    description: "Warm up their engines, preparing for the race ahead.",
  },
  {
    title: "Challenging Races",
    image: `${require("../../assets/Animation6/image2.jpg")}`,
    description:
      "Compete in high-speed, intense races, pushing the limits of speed and skill.",
  },
  {
    title: "Achieve Glory",
    image: `${require("../../assets/Animation6/image3.jpg")}`,
    description:
      "Cross the finish line, reach the ultimate goal of victory and glory.",
  },
];

function Animation6() {
  let imageList = useRef(null);
  let formula1List = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useGSAP(
    () => {
      gsap.to(formula1List.current.children[0], { opacity: 1 });
    },
    { dependencies: [] }
  );

  const slideLeft = (index, duration, multiplied = 1, delay = 0) => {
    gsap.to(imageList.current.children[index], {
      duration,
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
      delay: 1 * delay,
    });
  };

  const slideRight = (index, duration, multiplied = 1, delay = 0) => {
    gsap.to(imageList.current.children[index], {
      duration,
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
      delay: 1 * delay,
    });
  };

  const scale = (index, duration) => {
    gsap.from(imageList.current.children[index], {
      duration,
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  const fadeOut = (index, duration) => {
    gsap.to(formula1List.current.children[index], {
      duration,
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    gsap.to(formula1List.current.children[index], {
      duration,
      opacity: 1,
      delay: 1,
    });
  };

  // Arrow functions

  const nextSlide = () => {
    if (imageList.current.children[0].classList.contains("active")) {
      setState({ ...state, isActive1: false, isActive2: true });
      slideLeft(2, 0);
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.current.children[1].classList.contains("active")) {
      setState({ ...state, isActive2: false, isActive3: true });
      slideRight(0, 0);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else {
      setState({ ...state, isActive3: false, isActive1: true });
      slideRight(1, 0, 0);
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      scale(0, 1);
      fadeOut(2, 1);
      fadeIn(0, 1);
      slideRight(2, 0, 0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.current.children[0].classList.contains("active")) {
      setState({ ...state, isActive1: false, isActive3: true });
      slideLeft(2, 0, 3);
      slideRight(0, 1);
      slideLeft(2, 1, 2);
      scale(2, 1);
      fadeOut(0, 1);
      fadeIn(2, 1);
      slideLeft(1, 0, 2);
    } else if (imageList.current.children[1].classList.contains("active")) {
      setState({ ...state, isActive2: false, isActive1: true });
      slideRight(1, 1, 0);
      slideRight(0, 1, 0);
      slideRight(2, 0, 0);
      scale(0, 1);
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else {
      setState({ ...state, isActive3: false, isActive2: true });
      slideLeft(2, 1);
      slideLeft(1, 1);
      slideLeft(0, 0);
      scale(1, 1);
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="f1-section">
      <div className="f1-container">
        <div className="arrows left" onClick={prevSlide}>
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>

        <div className="inner">
          <div className="f1-image">
            <ul ref={imageList}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={formula1[0].image} alt={formula1[0].title} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={formula1[1].image} alt={formula1[1].title} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={formula1[2].image} alt={formula1[2].title} />
              </li>
            </ul>
          </div>
          <div className="f1-content">
            <ul ref={formula1List}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-inner">
                  <p className="description">{formula1[0].description}</p>
                  <h3 className="title">{formula1[0].title}</h3>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-inner">
                  <p className="description">{formula1[1].description}</p>
                  <h3 className="title">{formula1[1].title}</h3>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-inner">
                  <p className="description">{formula1[2].description}</p>
                  <h3 className="title">{formula1[2].title}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="arrows right" onClick={nextSlide}>
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export { Animation6 };
