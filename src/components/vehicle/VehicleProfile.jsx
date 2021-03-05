/** @format */

import React from "react";
import Card from "react-bootstrap/Card";

export default function VehicleProfile({
  brand,
  model,
  year,
  type,
  seats,
  image,
  price,
  count,
}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <h3>Brand: {brand}</h3>
        <p>Model: {model}</p>
        <p>Construction year: {year}</p>
        <p>Fuel type: {type}</p>
        <p>Number of seats: {seats}</p>
        <p>Picture: {image}</p>
        <p>Price per day: {price}</p>
        <p>Available vehicles: {count}</p>
      </Card>
    </div>
  );
}
