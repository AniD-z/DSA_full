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
              Welcome to <span className="span-emp">SchemaVerse</span>, the ultimate game that will teach you <span className="span-emp">NoSQL</span> commands in a fun and interactive way!

SchemaVerse is a game that combines learning and entertainment, where you will use data to query, filter, aggregate, and analyze information. You can choose from a wide variety of levels, ranging from easy to hard, and challenge yourself with different scenarios and cases. You can also track your progress, and compete with other players on the leaderboard.
            </p>
            <p>
              SchemaVerse is more than just a game, it is a learning experience that will make you a NoSQL pro. So what are you waiting for? Try SchemaVerse today and unleash your inner detective! 🔎
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
