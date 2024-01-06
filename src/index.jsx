import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Valorant from "./components/event_forms/valorant";
import Fifa from "./components/event_forms/fifa";
import Bgmi from "./components/event_forms/bgmi";
// import Home from "./components/home";
import SuccussPage from "./components/event_forms/sucess";
import EventPage from "./components/event_forms/eventpage";
import App from "./App";
import Hackathon from "./components/event_forms/hackathon";
import Rendezvous from "./components/event_forms/rendezvous";
import Input from "./input";

function Routee() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/input" exact element={<Input />} />
          <Route path="/valorant-registration" exact element={<Valorant />} />
          <Route path="/fifa-registration" exact element={<Fifa />} />
          <Route path="/bgmi-registration" exact element={<Bgmi />} />
          <Route path="/succuss" exact element={<SuccussPage />} />
          <Route path="/hackathon-registration" exact element={<Hackathon />} />
          <Route path="/rendezvous-registration" exact element={<Rendezvous />} />
          <Route
            path="/valorant"
            exact
            element={
              <EventPage
                eventName="Valorant"
                eventDescription="Ready to put your skills to the test?Join our Valorant gaming tournament and compete with the best players in the game! With exciting prizes, thrilling matches, and fierce competition, this is the ultimate event for serious gamers. Register now and show us what you've got!"
                
                reference="/valorant-registration"
                entryFee = "300/-"
                eventVenue = "Computer Science Labs - 5th floor"
                prizePool = "15000/-"
                eventDate = "21/04/2023 - 22/04/2023"
                // imgLink={gaming_arena}
              />
            }
          />
          <Route
            path="/fifa"
            exact
            element={
              <EventPage
                eventName="Fifa"
                eventDescription="Are you ready to take your FIFA skills to the next level? Join our FIFA gaming tournament and compete against the best players in the game! With thrilling matches, intense gameplay, and exciting prizes, this is the ultimate event for soccer fans and gamers alike. Register now and show us your skills!"
                entryFee = "100/-"
                eventVenue = "Computer Science Labs - 5th floor"
                prizePool = "3000/-"
                eventDate = "21/04/2023 - 22/04/2023"
                reference="/fifa-registration"
              />
            }
          />
          <Route
            path="/pubg"
            exact
            element={
              <EventPage
                eventName="BGMI"
                eventDescription="Get ready for the ultimate battle royale experience! Join our BGMI gaming tournament and compete against top players for a chance to win amazing prizes. With intense gameplay, adrenaline-pumping action, and skilled competitors, this event is not to be missed. Register now and enter the battlegrounds!"
                entryFee = "300/-"
                eventVenue = "Computer Science Labs - 5th floor"
                prizePool = "15000/-"
                eventDate = "21/04/2023 - 22/04/2023"
                reference="/bgmi-registration"
              />
            }
          />
          <Route
            path="/hackathon"
            exact
            element={
              <EventPage
                eventName="Hackathon"
                eventDescription="Join our VR/AR hackathon and take your skills to the next level! With cutting-edge technology and innovative challenges, this event is the ultimate opportunity to showcase your creativity and expertise. Network with like-minded professionals, develop amazing projects, and win prizes. Register now and join the future of technology!"
                entryFee = "NADA"
                eventVenue = "Computer Science Labs - 5th floor"
                prizePool = "10000/-"
                eventDate = "21/04/2023 - 22/04/2023"
                reference="/hackathon-registration"
              />
            }
          />
          <Route
            path="/rendezvous"
            exact
            element={
              <EventPage
                eventName="Rendezvous"
                eventDescription="Embark on a treasure hunt like never before! Our AR integrated event uses the latest technology to create an immersive and exciting experience. Explore the city, solve clues, and discover hidden treasures in this unforgettable adventure. Register now and see the world in a whole new way!"
                reference="/rendezvous-registration"
                entryFee = "NADA"
                eventVenue = "Yoga-Hall, 3rd floor, E-Block"
                prizePool = "3000/-"
                eventDate = "21/04/2023 - 22/04/2023"
              />
            }
          />
          <Route
            path="/gaming-arena"
            exact
            element={
              <EventPage
                eventName="Gaming Arena"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            }
          />
          <Route
            path="/hallucinate"
            exact
            element={
              <EventPage
                eventName="Hallucinate"
                eventDescription="Experience a world beyond your imagination with our VR event featuring the Oculus headset! Explore amazing virtual landscapes, interact with objects, and immerse yourself in an entirely new reality. Join us for a mind-bending experience that will leave you wanting more!"

              />
            }
          />
          <Route
            path="/laser-maze"
            exact
            element={
              <EventPage
                eventName="Lazer Maze"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            }
          />
          <Route
            path="/flash"
            exact
            element={
              <EventPage
                eventName="Flash"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routee;
