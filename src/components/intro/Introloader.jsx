import React from "react";
import { useState } from "react";

import "./Intro.css";

export default function Introloader() {
  return (
    <div className="scroll">
      <h1 className="scroll-indi ff-tc">Scroll down :)</h1>
    <section className={`intro-1 ff-tc`}>
      {/* <a href="#intro-sec"> */}
      <div className="intro-box ">
        <div className="intro-btn"></div>
        <div className="intro-btn-txt">SV</div>
      </div>
      {/* </a> */}
    </section>
    </div>

  );
}
