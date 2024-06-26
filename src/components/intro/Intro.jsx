import React from "react";
import "./Intro.css";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Intro = () => {
  useEffect(() => {
    gsap.fromTo(
      ".qt-up",
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "slow",
        scrollTrigger: {
          trigger: ".intro-1",
          // markers: true,
          scrub: 1,
          start: "center 10%",
          end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      ".qt-emp",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.6,
        ease: "slow",
        scrollTrigger: {
          trigger: ".intro-1",
          // markers: true,
          scrub: 1,
          start: "center 15%",
          end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      ".qt-down",
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.51,
        delay: 0.7,
        ease: "slow",
        scrollTrigger: {
          trigger: ".intro-1",
          // markers: true,
          scrub: 1,
          //   pin: true,
          start: "center 20%",
          end: "bottom 10%",
        },
      }
    );

    // gsap.fromTo(
    //   ".qt-up",
    //   { y: 70, opacity: 0 },

    //   { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    // );

    // gsap.fromTo(
    //   ".qt-emp",
    //   { y: 50, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.5, delay: 0.6 }
    // );

    // gsap.fromTo(
    //   ".qt-down",
    //   { y: 70, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.51, delay: 0.7 }
    // );
    // gsap.fromTo(".banner", { x: 200 }, { x: -50, duration: 1 });

    gsap.fromTo(
      ".title-up",
      { x: -200 },
      {
        x: 400,
        // opacity: 1,
        duration: 500,
        // delay: 100,
        ease: "slow",
        scrollTrigger: {
          trigger: ".intro-start-box ",
          //   trigger: ".intro-quote ",
          //   trigger: ".intro-title",
          //   markers: true,
          scrub: 1,
          //   pin: true,
          start: "center 50% ",
          end: "bottom 10%",
        },
      }
    );

    gsap.fromTo(
      ".title-down",
      { x: 200 },
      {
        x: -180,
        // opacity: 1,
        duration: 500,
        // delay: 100,

        ease: "slow",
        scrollTrigger: {
          trigger: ".intro-start-box ",

          //   trigger: ".intro-quote ",
          //   trigger: ".intro-title",
          //   markers: true,
          scrub: 1,
          //   pin: true,
          start: "center 40% ",
          end: "bottom 10% ",
        },
      }
    );
  }, []);

  return (
    <section className="intro-page">
      <div className="intro-start-box ff-tc">
        <div className="intro-quote ">
          <div className="qt-txt qt-up">Elevate Your</div>
          <div className="qt-emp">Problem-Solving</div>
          <div className="qt-txt qt-down">While Escaping!</div>
        </div>
        <div className="intro-title intro-lap">
          <div className="title-up">
            <div className="">Algorithmic</div>
            <div className="line-up">
              <div className="line"></div>
              <div className="date-up "></div>
            </div>
          </div>
          <div className="title-down">
            <div className="">Arcade</div>
            <div className="line-down">
              <div className="line"></div>
              <div className="date-down "></div>
            </div>
          </div>
        </div>

        <div className="intro-mob ot-red ff-tc ">
          {/* <div className="title-left ot-red"> */}
          <div className="title-mob-box">
            <ul className="title-mob ul-left">
              <li className="">A</li>
              <li className="">L</li>
              <li className="">G</li>
              <li className="">O</li>
              <li className="">M</li>
              <li className="">A</li>
            </ul>
            {/* </div> */}
            {/* <div className="title-right ot-red text-black"> */}
            <ul className="title-mob ul-right">
              <li>A</li>
              <li>R</li>
              <li>C</li>
              <li>A</li>
              <li>D</li>
              <li>E</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
