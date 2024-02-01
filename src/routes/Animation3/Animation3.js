import React, { useRef } from "react";
import "./Animation3.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Animation3() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(box1.current, {
        x: 50,
        backgroundColor: "#00BAE2",
        opacity: 0,
        duration: 1,
      });
      tl.from(
        box2.current,
        { x: 100, backgroundColor: "#00BAE2", rotation: 360 },
        "+=0.2"
      );
      tl.fromTo(
        box3.current,
        { x: -150, backgroundColor: "#EC7614" },
        {
          x: 150,
          backgroundColor: "#00BAE2",
          scale: 2,
          duration: 2,
        }
      );
      tl.set(box4.current, {
        x: 150,
        backgroundColor: "#EC7614",
        onComplete: () => {
          setTimeout(() => {
            tl.restart();
          }, 500);
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="App">
      <header className="App-header">
        <div ref={box1} className="box box-green"></div>
        <div ref={box2} className="box box-green"></div>
        <div ref={box3} className="box box-green"></div>
        <div ref={box4} className="box box-green"></div>
      </header>
    </div>
  );
}

export { Animation3 };
