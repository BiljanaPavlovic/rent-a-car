/** @format */

import React from "react";
import Card from "react-bootstrap/Card";

export default function CustomerProfile({ name, email, phone }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <h3>Name: {name}</h3>
        <p>E-mail: {email}</p>
        <p>Phone: {phone}</p>
      </Card>
    </div>
  );
}
