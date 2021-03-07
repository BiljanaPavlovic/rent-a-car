/** @format */

import React from "react";

export default function EventProfile({ start, end, vehicle, customer }) {
  return (
    <div>
      <p>Start date and time: {start}</p>
      <p>End date and time: {end}</p>
      <p>Vehicle: {vehicle}</p>
      <p>Customer: {customer}</p>
    </div>
  );
}
