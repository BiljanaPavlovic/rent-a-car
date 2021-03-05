/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CustomerAdding() {
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Form>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
          </Form>
          <Button variant="secondary">Secondary</Button>{" "}
        </Card>
      </Container>
    </div>
  );
}
