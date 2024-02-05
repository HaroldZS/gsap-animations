import React, { useRef } from "react";
import "./Animation4.scss";
import artPicture from "./artPicture.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";

function Animation4() {
  const container = useRef(null);
  const img = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(".A4-img-container:after");

  let tl = gsap.timeline();

  useGSAP(() => {
    tl.to(container.current, { duration: 1, visibility: "visible" })
      .to(imageReveal, { duration: 1.4, width: "0%", ease: Power2.easeInOut })
      .from(img.current, {
        duration: 1.4,
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -1.5,
      });
  });

  return (
    <section className="A4">
      <div ref={container} className="A4-container">
        <div className="A4-img-container">
          <img ref={img} src={artPicture} alt="img" />
        </div>
      </div>
    </section>
  );
}

export { Animation4 };
