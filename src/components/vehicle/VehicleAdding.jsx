/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function VehicleAdding() {
  return (
    <div>
      <Container>
        <Card style={{ width: "30rem" }}>
          <Form>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
            <Form.Row>
              <Form.Control type="text" placeholder="Normal text" />
            </Form.Row>
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
