import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1> Sprawdź nasze menu! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img1.jpg"
              text="Kup papos w dos gatos"
              label="Mexico"
              path="/services"
            />
            <CardItem
              src="images/img2.jpg"
              text="Kup papos w dos gatos"
              label="Mexico"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img3.jpg"
              text="Kup papos w dos gatos"
              label="Mexico"
              path="/services"
            />
            <CardItem
              src="images/img4.jpg"
              text="Kup papos w dos gatos"
              label="Mexico"
              path="/services"
            />
            <CardItem
              src="images/img5.jpg"
              text="Kup papos w dos gatos"
              label="Mexico"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
