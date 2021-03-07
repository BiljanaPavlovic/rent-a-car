/** @format */

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postCustomer } from "../../services";

export default function CustomerAdding() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmitCustomer() {
    postCustomer(id, name, email, phone).then((data) => {
      console.log("succsess");
    });
  }

  return (
    <div>
      <Container>
        <Card style={{ width: "100%" }}>
          <Form>
            <Form.Row>
              <Form.Control
                onChange={(e) => setId(e.target.value)}
                type="number"
                placeholder="Enter id"
              />
            </Form.Row>
            <Form.Row>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
              />
            </Form.Row>

            <Form.Row>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Row>

            <Form.Row>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Enter phone number"
              />
            </Form.Row>
          </Form>
          <Button variant="secondary" onClick={handleSubmitCustomer}>
            Send
          </Button>{" "}
        </Card>
      </Container>
    </div>
  );
}
