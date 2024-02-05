import React, { useRef } from "react";
import "./Animation5.scss";
import { MdKey } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Animation5() {
  const key1 = useRef(null);
  const key2 = useRef(null);
  const key3 = useRef(null);
  const key4 = useRef(null);
  const key5 = useRef(null);
  const key6 = useRef(null);
  const key7 = useRef(null);
  const key8 = useRef(null);

  let tl1 = gsap.timeline();
  let tl2 = gsap.timeline();
  let tl3 = gsap.timeline();
  let tl4 = gsap.timeline();
  let tl5 = gsap.timeline();
  let tl6 = gsap.timeline();
  let tl7 = gsap.timeline();
  let tl8 = gsap.timeline();

  useGSAP(
    () => {
      tl1
        .to(key1.current, { duration: 1, x: 367 })
        .to(key1.current, { duration: 1, y: 177, x: 0 })
        .to(key1.current, { duration: 1, y: 0 });

      tl2
        .to(key2.current, { duration: 1, y: 177 })
        .to(key2.current, { duration: 1, x: -367, y: 354 })
        .to(key2.current, { duration: 1, y: 177 });

      tl3
        .to(key3.current, { duration: 1, y: -177 })
        .to(key3.current, { duration: 1, x: 367 })
        .to(key3.current, { duration: 1, y: 0 });

      tl4
        .to(key4.current, { duration: 1, x: -367 })
        .to(key4.current, { duration: 1, y: -177 })
        .to(key4.current, { duration: 1, x: 0 });

      tl5
        .to(key5.current, { duration: 1, x: 367 })
        .to(key5.current, { duration: 1, y: 177 })
        .to(key5.current, { duration: 1, x: 0 });

      tl6
        .to(key6.current, { duration: 1, y: 177 })
        .to(key6.current, { duration: 1, x: -367 })
        .to(key6.current, { duration: 1, y: 0 })
        .to(key6.current, { duration: 1, y: -177 })
        .to(key6.current, { duration: 1, y: -354, x: 0 })
        .to(key6.current, { duration: 1, y: 0, x: 0 });

      tl7
        .to(key7.current, { duration: 1, y: -177 })
        .to(key7.current, { duration: 1, x: 367, y: -354 })
        .to(key7.current, { duration: 1, y: -177 });

      tl8
        .to(key8.current, { duration: 1, x: -367 })
        .to(key8.current, { duration: 1, y: -177, x: 0 })
        .to(key8.current, { duration: 1, y: 0 })
        .to(key8.current, { duration: 1, y: -177 })
        .to(key8.current, { duration: 1, y: 0, x: -367 })
        .to(key8.current, { duration: 0.2, x: -734 })
        .to(key8.current, { duration: 0.4, y: -354 })
        .to(key8.current, { duration: 0.3, x: -367 });
    },
    { dependencies: [] }
  );

  return (
    <div className="limbo">
      <div className="guess-container">
        <p>Guess the Key!</p>
      </div>
      <div className="limbo-container">
        <div className="key-container" ref={key1}>
          <MdKey className="key" style={{ backgroundColor: "yellow" }} />
        </div>
        <div className="key-container" ref={key2}>
          <MdKey className="key" style={{ backgroundColor: "red" }} />
        </div>
        <div className="key-container" ref={key3}>
          <MdKey className="key" style={{ backgroundColor: "blue" }} />
        </div>
        <div className="key-container" ref={key4}>
          <MdKey className="key" />
        </div>
        <div className="key-container" ref={key5}>
          <MdKey className="key" style={{ backgroundColor: "purple" }} />
        </div>
        <div className="key-container" ref={key6}>
          <MdKey className="key" style={{ backgroundColor: "black" }} />
        </div>
        <div className="key-container" ref={key7}>
          <MdKey className="key" style={{ backgroundColor: "orange" }} />
        </div>
        <div className="key-container" ref={key8}>
          <MdKey className="key" style={{ backgroundColor: "pink" }} />
        </div>
      </div>
    </div>
  );
}

export { Animation5 };
