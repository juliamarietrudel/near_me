import React from "react";

const GymsLayout = ({ title, listComponent, mapComponent }) => {
  return (
    <div className="content-centered">
      <div className="gyms-layout">
        <header className="gyms-layout__header">
          <h3>{title}</h3>
        </header>
        <main className="gyms-layout__content">
          <div className="gyms-layout__list">{listComponent}</div>
          <div className="gyms-layout__map">{mapComponent}</div>
        </main>
      </div>
    </div>
  );
};

export default GymsLayout;
