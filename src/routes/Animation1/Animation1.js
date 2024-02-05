import React, { useRef } from "react";
import logo from "../../logo.svg";
import "./Animation1.scss";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { useGSAP } from "@gsap/react";

function Animation1() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  const styles = {
    duration: 1.8,
    opacity: 0,
    y: -20,
    ease: Power3.easeOut,
  };

  useGSAP(
    () => {
      gsap.from(logoItem.current, styles);

      gsap.from(textItem.current, {
        ...styles,
        y: 20,
        delay: 0.2,
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="A1-container">
      <header>
        <img ref={logoItem} src={logo} className="A1-logo" alt="logo" />
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
