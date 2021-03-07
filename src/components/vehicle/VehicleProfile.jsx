/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import "./vehicles.css";

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
      <Card className="vehicle-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <hr />
        <h3>Brand: {brand}</h3>
        <hr />
        <p>Model: {model}</p>
        <hr />
        <p>Construction year: {year}</p>
        <hr />
        <p>Fuel type: {type}</p>
        <hr />
        <p>Number of seats: {seats}</p>
        <hr />
        <p>Price per day: {price}</p>
        <hr />
        <p>Available vehicles: {count}</p>
      </Card>
    </div>
  );
}
