/** @format */

import React, { useEffect, useState } from "react";
import "./vehicles.css";
import VehicleProfile from "./VehicleProfile";
import { getVehicles } from "../../services";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function VehiclesList() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    getVehicles().then((data) => {
      console.log(data);
      setVehicle(data);
    });
  }, []);

  return (
    <div>
      <h2>Vehicles</h2>
      <div className="vehicles-list">
        {vehicle.map((vehicle) => {
          return (
            <VehicleProfile
              key={vehicle.id}
              brand={vehicle.brand}
              model={vehicle.model}
              year={vehicle.year}
              type={vehicle.type}
              seats={vehicle.seats}
              image={vehicle.image}
              price={vehicle.price}
              count={vehicle.count}
            />
          );
        })}
      </div>
      <Link to="/addvehicle">
        <Button variant="secondary">ADD VEHICLE</Button>
      </Link>
    </div>
  );
}
