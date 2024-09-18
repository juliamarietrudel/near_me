import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GymsLayout from "../layout/GymsLayout";
import ContentList from "../features/GymsIndex/ContentList";
import GymMap from "../features/GymsMap/GymMap";

const Index = () => {
  const navigate = useNavigate();
  const [gyms, setGyms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = "/api/v1/gyms";
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Network response was not ok.");
      })
      .then((res) => setGyms(res))
      .catch(() => navigate("/"));
  }, []);

  const filteredGyms = gyms.filter((gym) =>
    gym.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <GymsLayout
      // title="Gyms in your area"
      contentComponent={
        <ContentList
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          gyms={filteredGyms}
        />
      }
      mapComponent={<GymMap gyms={filteredGyms} />}
    />
  );
};

export default Index;
