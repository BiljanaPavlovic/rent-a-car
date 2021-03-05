/** @format */

import React from "react";

export default function EventProfile({ start, end, vehicle, customer }) {
  return (
    <div>
      <h2>Event</h2>
      <p>Start date and time: {start}</p>
      <p>End date and time: {end}</p>
      <p>Vehicle: {vehicle}</p>
      <p>Customer: {customer}</p>
    </div>
  );
}
