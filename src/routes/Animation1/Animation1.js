import React, { useEffect, useRef } from "react";
import logo from "../../logo.svg";
import "./Animation1.scss";
import { gsap } from "gsap";
import { Power3 } from "gsap";

function Animation1() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    let text = textItem.current;
    const imgObj = { opacity: 0, y: 20 };
    const textObj = { opacity: 0, y: 20 };

    gsap.to(imgObj, {
      duration: 1.8,
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      onUpdate: () => {
        logoItem.style.opacity = imgObj.opacity;
        logoItem.style.transform = `translateY(${imgObj.y}px)`;
      },
    });

    gsap.to(textObj, {
      duration: 1.8,
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.2,
      onUpdate: () => {
        text.style.opacity = textObj.opacity;
        text.style.transform = `translateY(${textObj.y}px)`;
      },
    });
  }, []);

  return (
    <div className="A1-container">
      <header>
        <img
          ref={(element) => (logoItem = element)}
          src={logo}
          className="A1-logo"
          alt="logo"
        />
        <p ref={textItem}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App1-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export { Animation1 };
