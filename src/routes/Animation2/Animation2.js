import React, { useRef, useEffect } from "react";
import "./Animation2.css";

import { gsap } from "gsap";
import { Power3 } from "gsap";

function Animation2() {
  let circleYellow = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  useEffect(() => {
    gsap.from(circleYellow, {
      opacity: 0,
      x: 40,
      duration: 0.8,
      ease: Power3.easeOut,
    });
    gsap.from(circleRed, {
      opacity: 0,
      x: 40,
      duration: 0.8,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    gsap.from(circleBlue, {
      opacity: 0,
      x: 40,
      duration: 0.8,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Circle-container    ">
          <div
            ref={(element) => (circleYellow = element)}
            className="circle circle-yellow"
          ></div>
          <div
            ref={(element) => (circleRed = element)}
            className="circle circle-red"
          ></div>
          <div
            ref={(element) => (circleBlue = element)}
            className="circle circle-blue"
          ></div>
        </div>
      </header>
    </div>
  );
}

export { Animation2 };
