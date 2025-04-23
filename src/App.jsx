import { useState } from "react";
import "./App.css";
import dropDown from "./images/images/down-arrow.svg";
import Model3 from "./images/images/model-3.jpg";
import Modely from "./images/images/model-y.jpg";
import Models from "./images/images/model-s.jpg";
import Modelx from "./images/images/model-x.jpg";
import ModelSolarPanles from "./images/images/solar-panel.jpg";
import ModelSolarRoof from "./images/images/solar-roof.jpg";
import Accessories from "./images/images/accessories.jpg";

import Header from "./Header";
import Section from "./Section";

function App() {
  const toggleSection = (section) => {
    setDataShow((show) => (show === section ? null : section));
  };

  return (
    <>
      <div className="container">
        <Header />

        <Section
          heading="Model 3"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          image={dropDown}
          bg={Model3}
        />
        <Section
          heading="Model Y"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={Modely}
        />
        <Section
          heading="Model S"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={Models}
        />
        <Section
          heading="Model X"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={Modelx}
        />
        <Section
          heading="Solar Panels"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={ModelSolarPanles}
        />
        <Section
          heading="Solar Panels"
          tagline="Order online for touchless delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bg={ModelSolarRoof}
        />
        <Section
          heading="Accessories"
          leftBtn="Custom Order"
          bg={Accessories}
        />

      </div>
    </>
  );
}

export default App;
