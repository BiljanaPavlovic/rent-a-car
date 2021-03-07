/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import "./event.css";

export default function EventProfile({ start, end, vehicle, customer }) {
  return (
    <div>
      <Card className="event-card" style={{ width: "18rem" }}>
        <p>Start date and time: {start}</p>
        <hr />
        <p>End date and time: {end}</p>
        <hr />
        <p>Vehicle: {vehicle}</p>
        <hr />
        <p>Customer: {customer}</p>
      </Card>
    </div>
  );
}
