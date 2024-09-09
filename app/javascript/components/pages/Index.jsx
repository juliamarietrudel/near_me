import React from "react";
import Gyms from "../features/GymsIndex/Gyms";
import GymMap from "../features/GymsMap/GymMap";

const Index = () => {
  return (
    <div className="content-centered">
      <div className="gyms-layout">
        <header className="gyms-layout__header">
          <h3>Gyms in your area</h3>
        </header>
        <main className="gyms-layout__content">
          <div className="gyms-layout__list">
            <Gyms />
          </div>
          <div className="gyms-layout__map">
            <GymMap />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
