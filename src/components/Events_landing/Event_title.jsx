import React from "react";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Event_title() {
  useEffect(() => {
    gsap.fromTo(
      ".toBlack-Desk",
      { backgroundColor: "inherit" },
      {
        backgroundColor: "black",
        duration: 1,
        scrollTrigger: {
          trigger: ".date-down",
          scrub: 1,
          start: "center center",
          end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      ".title-right",
      { x: 200, color: "black" },
      {
        x: -200,
        // opacity: 1,
        color: "white",
        duration: 2,
        delay: 0.5,
        ease: "slow",
        scrollTrigger: {
          trigger: ".date-down",
          //   markers: true,
          scrub: 1,
          start: "center center",
          end: "bottom 10%",
        },
      }
    );
  }, []);

  return (
    <div className="">
      <section className="event-title event-lap ff-tc ">
        <div className="title-right">Levels</div>
      </section>

      <section className="event-title-mob event-mon ff-tc ">
        <div className="title">Levels</div>
      </section>
    </div>
  );
}
