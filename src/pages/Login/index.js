import React from "react";
import {Container, Row, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  
  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
      
          <Button variant="primary" type="submit">
            LOGIN
          </Button>
          <Link to="/signup">
            <Button variant="primary" type="submit">
              SIGN UP
            </Button>
          </Link>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
