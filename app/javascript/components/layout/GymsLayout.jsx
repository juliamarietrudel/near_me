import React from "react";

const GymsLayout = ({ title, contentComponent, mapComponent }) => {
  return (
    <div className="gyms-layout">
      <header className="gyms-layout__header">
        <h3>{title}</h3>
      </header>
      <main className="gyms-layout__content">
        <div className="gyms-layout__list">{contentComponent}</div>
        <div className="gyms-layout__map">{mapComponent}</div>
      </main>
    </div>
  );
};

export default GymsLayout;
