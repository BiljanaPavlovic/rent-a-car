/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import "./customers.css";

export default function CustomerProfile({ id, name, email, phone }) {
  return (
    <div>
      <Card className="customer-card" style={{ width: "18rem" }}>
        <h3>Name: {name}</h3>
        <hr />
        <p>E-mail: {email}</p>
        <hr />
        <p>Phone: {phone}</p>
      </Card>
    </div>
  );
}
