/** @format */

import React /* ,{ useState }*/ from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import { postCustomer } from "../../services";

export default function CustomerAdding() {
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

function handleSubmit(){
  postCustomer(id, name, email, phone)
  .then(data => {
    if(data.success){

    }
  })
}*/

  return (
    <div>
      <Container>
        <Card style={{ width: "30rem" }}>
          <Form>
            <Form.Row>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Row>

            <Form.Row>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Row>

            <Form.Row>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Row>
          </Form>
          <Button variant="secondary">Secondary</Button>{" "}
        </Card>
      </Container>
    </div>
  );
}
