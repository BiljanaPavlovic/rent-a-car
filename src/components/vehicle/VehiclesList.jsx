/** @format */

import React from "react";
import "./vehicles.css";
import VehicleAdding from "./VehicleAdding";
import VehicleProfile from "./VehicleProfile";

export default function VehiclesList() {
  return (
    <div>
      <h2>Vehicles</h2>
      <div className="vehicles-list">
        <VehicleProfile
          brand="BMW"
          model="xy"
          year="2020"
          type="xyxy223"
          seats="5"
          image="img"
          price="200"
          count="5"
        />
        <VehicleProfile
          brand="BMW"
          model="xy"
          year="2020"
          type="xyxy223"
          seats="5"
          image="img"
          price="200"
          count="5"
        />
        <VehicleProfile
          brand="BMW"
          model="xy"
          year="2020"
          type="xyxy223"
          seats="5"
          image="img"
          price="200"
          count="5"
        />
        <VehicleProfile
          brand="BMW"
          model="xy"
          year="2020"
          type="xyxy223"
          seats="5"
          image="img"
          price="200"
          count="5"
        />
        <VehicleProfile
          brand="BMW"
          model="xy"
          year="2020"
          type="xyxy223"
          seats="5"
          image="img"
          price="200"
          count="5"
        />
        <VehicleProfile
          brand="BMW"
          model="xy"
          year="2020"
          type="xyxy223"
          seats="5"
          image="img"
          price="200"
          count="5"
        />
      </div>
      <VehicleAdding />
    </div>
  );
}
