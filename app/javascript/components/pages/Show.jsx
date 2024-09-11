import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GymsLayout from "./GymsLayout";
import GymListItem from "./GymListItem";
import GymMap from "../features/GymsMap/GymMap";

const GymShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gym, setGym] = useState(null);

  useEffect(() => {
    const url = `/api/v1/gyms/${id}`;
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Network response was not ok.");
      })
      .then((res) => setGym(res))
      .catch(() => navigate("/"));
  }, [id]);

  if (!gym) return <div>Loading...</div>;

  const GymDetails = () => (
    <GymListItem
      key={gym.id}
      name={gym.name}
      address={gym.address}
      id={gym.id}
    />
  );

  return (
    <GymsLayout
      title={`Details for ${gym.name}`}
      listComponent={<GymDetails />}
      mapComponent={<GymMap gyms={[gym]} />}
    />
  );
};

export default GymShow;
