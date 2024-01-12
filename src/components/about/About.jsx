import React from "react";
import "./About.css";
import Infocards from "../Infocards/Infocards";

export default function About() {
  return (
    <section className="about-section ">
      <div className="about-container ">
        <div className="about-title title ff-tc "> About</div>
        <div className="about-info flex flex-col justify-evenly ">
          <div className="info-text text-white text-[24px]">
            <p>
              {" "}
              Welcome to <span className="span-emp">GG!</span>, the ultimate
              gaming event that will take you on a journey of adventure,
              excitement, and pure gaming fun! Join us on{" "}
              <span className="span-emp">April 21st and 22nd</span> for two days
              of non-stop gaming fun, including Hallucinate, where you'll
              experience mind-bending VR gameplay, Rendezvous, a treasure hunt
              with a high-tech twist, Flash, a special movie screening of your
              favorite blockbuster films, and Alt+f4, a gaming tournament that
              will test your skills and push you to the limit.
            </p>
            <p>
              Get ready to immerse yourself in the world of gaming like never
              before, connect with other passionate gamers, and have the time of
              your life at GG!
            </p>
          </div>
          <div className="hero-cards w-full">
            <div className="info-container flex flex-wrap h-full flex-col justify-evenly ">
              <Infocards
                name="Querying"
                clr="black"
                gif="/pics/gif1.gif"
                bg="bg-white"
                // bg="white"
              />

              <Infocards
                name="optimizing"
                clr="white"
                gif="/pics/gif2.gif"
                bg="bg-black"
                // bg="black"
              />

              <Infocards
                name="indexing"
                clr="black"
                gif="/pics/gif4.gif"
                bg="bg-[#ece1d6]"
                // bg="#ece1d6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
