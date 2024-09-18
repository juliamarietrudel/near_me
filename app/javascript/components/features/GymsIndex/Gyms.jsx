// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import GymListItem from "./GymListItem";
// import GymMap from "../GymsMap/GymMap";

// const Gyms = () => {
//   const navigate = useNavigate();
//   const [gyms, setGyms] = useState([]);

//   useEffect(() => {
//     const url = "/api/v1/gyms";
//     fetch(url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then((res) => setGyms(res))
//       .catch(() => navigate("/"));
//   }, []);

//   const allGyms = gyms.map((gym) => (
//     <Link to={`/gyms/${gym.id}`} className="gym-item">
//       <GymListItem
//         key={gym.id}
//         name={gym.name}
//         address={gym.address}
//         id={gym.id}
//       />
//     </Link>
//   ));

//   return <>{allGyms}</>;
// };

// export default Gyms;
