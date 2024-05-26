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
              Welcome to <span className="span-emp">Algorithmic Arcade</span>, the ultimate game that will teach you <span className="span-emp">DATA Structures</span> in a fun and interactive way!

               There are many levels
or rooms which are related to the concepts of data structures
such as the Linked List, Trees, Stacks etc. You as the player have to use
your knowledge in data structures and crack these levels.          </p>
            <p>
            Algorithmic Arcade is more than just a game, it is a learning experience that will make you a DSA pro. So what are you waiting for? Try Algorithmic Arcade today and unleash your inner detective! 🔎
            </p>
          </div>
          <div className="hero-cards w-full">
            <div className="info-container flex flex-wrap h-full flex-col justify-evenly ">
              <Infocards
                name="Visualizing"
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
                name="Space Complexity"
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
