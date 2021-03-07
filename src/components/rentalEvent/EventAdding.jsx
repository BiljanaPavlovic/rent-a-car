/** @format */

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postEvent } from "../../services";

export default function EventAdding() {
  const [id, setId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [customer, setCustomer] = useState("");

  function handleSubmitEvent() {
    postEvent(id, startDate, endDate, vehicle, customer).then((data) => {
      console.log("succsess");
    });
  }
  return (
    <div>
      <h2>Add event</h2>
      <Container>
        <Form>
          <Card style={{ width: "100%" }}>
            <Form.Control
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="Enter Id"
            />
            <Form.Control
              onChange={(e) => setStartDate(e.target.value)}
              type="text"
              placeholder="Enter Start Date"
            />
            <Form.Control
              onChange={(e) => setEndDate(e.target.value)}
              type="text"
              placeholder="Enter End Date"
            />
            <Form.Control
              onChange={(e) => setVehicle(e.target.value)}
              type="text"
              placeholder="Enter Vehicle"
            />
            <Form.Control
              onChange={(e) => setCustomer(e.target.value)}
              type="text"
              placeholder="Enter Customer"
            />
            <Button onClick={handleSubmitEvent} variant="secondary">
              Send
            </Button>
          </Card>
        </Form>
      </Container>
    </div>
  );
}
