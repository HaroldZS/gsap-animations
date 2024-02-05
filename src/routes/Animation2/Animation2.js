import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import "./Animation2.scss";

import { gsap } from "gsap";
import { Power3 } from "gsap";

function Animation2() {
  let app = useRef(null);
  let circleYellow = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    gsap.to(circleRed.current, {
      width: 200,
      height: 200,
      duration: 0.8,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const handleShrink = () => {
    gsap.to(circleRed.current, {
      width: 75,
      height: 75,
      duration: 0.8,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  useGSAP(
    () => {
      gsap.to(app.current, {
        css: { visibility: "visible" },
      });
      gsap.from([circleYellow.current, circleRed.current, circleBlue.current], {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: Power3.easeOut,
        stagger: {
          amount: 0.2,
          from: "start",
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div ref={app} className="A2-container">
      <header>
        <div className="Circle-container">
          <div ref={circleYellow} className="circle circle-yellow"></div>
          <div
            onClick={state ? handleShrink : handleExpand}
            ref={circleRed}
            className="circle circle-red"
          ></div>
          <div ref={circleBlue} className="circle circle-blue"></div>
        </div>
      </header>
    </div>
  );
}

export { Animation2 };
