import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GymsLayout from "./GymsLayout";
import GymListItem from "./GymListItem";
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

  const GymsList = () => (
    <div>
      <input
        type="text"
        placeholder="Search gyms..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border rounded"
      />
      {filteredGyms.map((gym) => (
        <GymListItem
          key={gym.id}
          name={gym.name}
          address={gym.address}
          id={gym.id}
        />
      ))}
    </div>
  );

  return (
    <GymsLayout
      title="Gyms in your area"
      listComponent={<GymsList />}
      mapComponent={<GymMap gyms={filteredGyms} />}
    />
  );
};

export default Index;
