import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GymsLayout from "../layout/GymsLayout";
import GymListItem from "../features/GymsIndex/GymListItem";
import GymMap from "../features/GymsMap/GymMap";
import GymReviews from "../features/GymsIndex/GymReviews";

const Show = () => {
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
      .then((res) => {
        console.log("Gym data received:", res);
        setGym(res);
      })
      .catch(() => navigate("/"));
  }, [id]);

  if (!gym) return <div>Loading...</div>;

  const GymDetails = () => {
    return (
      <>
        <GymListItem
          name={gym.name}
          address={gym.address}
          description={gym.description}
        />
        <GymReviews gym={gym} />
      </>
    );
  };
  return (
    <>
      <GymsLayout
        title={`Details for ${gym.name}`}
        listComponent={<GymDetails />}
        mapComponent={<GymMap gyms={[gym]} />}
      />
    </>
  );
};

export default Show;
