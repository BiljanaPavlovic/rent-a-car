/** @format */

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postVehicle } from "../../services";

export default function VehicleAdding() {
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [seats, setSeats] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");

  function handleSubmitVehicles() {
    postVehicle(id, brand, model, year, type, seats, image, price, count).then(
      (data) => {
        if (data.success) {
          console.log("uspesno");
        } else {
          console.log("nije uspelo");
        }
      }
    );
  }
  return (
    <div>
      <Container>
        <Card style={{ width: "100%" }}>
          <Form>
            <Form.Row>
              <Form.Control
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="Enter id"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                placeholder="Enter Brend"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setModel(e.target.value)}
                type="text"
                placeholder="Enter Model"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setYear(e.target.value)}
                type="text"
                placeholder="Enter Year"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setType(e.target.value)}
                type="text"
                placeholder="Enter Type"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setSeats(e.target.value)}
                type="text"
                placeholder="Enter number of seats"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Enter URL of Image"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Enter Price"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setCount(e.target.value)}
                type="text"
                placeholder="Enter the number of available vehicles"
              />
            </Form.Row>
          </Form>
          <Button variant="secondary" onClick={handleSubmitVehicles}>
            Send
          </Button>{" "}
        </Card>
      </Container>
    </div>
  );
}
