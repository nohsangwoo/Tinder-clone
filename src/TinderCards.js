import React, { useState } from "react";
import "./TinderCards.css";
import Elon from "./img/elon-musk.jpg";
import zeff from "./img/zeff-bezos.jpg";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musc",
      url: Elon,
    },
    {
      name: "Jeff Bezos",
      url: zeff,
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="TinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <>
              <TinderCard
                className="swipe"
                key={person.name}
                pereventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
              >
                <div
                  style={{ backgroundImage: `url(${person.url})` }}
                  className="card"
                >
                  <h3>{person.name}</h3>
                </div>
              </TinderCard>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
