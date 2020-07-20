import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Form, Button, Modal, Col, Card } from "react-bootstrap";
import { useUserContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import "./login.css";

function Login() {
  const [dispatch] = useUserContext();
  const [formObject, setFormObject] = useState({});
  const [willRedirect, setWillRedirect] = useState(false);
  const [loginStatus, setloginStatus] = useState();
  const [show, setShow] = useState(false);

  function LogUserIn(event) {
    event.preventDefault();

    // Setting our component's initial state
    if (!formObject.email || !formObject.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    API.loginUser(formObject)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setloginStatus(true);
          setShow(true);
        }
        dispatch({ type: "login", user: res.data });
      })
      .catch((err) => {
        console.log(err);
        setShow(true);
      });
  }

  const handleClose = () => {
    setShow(false);
    if (loginStatus) {
      setWillRedirect(true);
    }
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <Container>
      <Modal backdrop="static" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loginStatus
            ? "Congratulations!! You have successfully logged in.  You will be redirected to the home page at the close of this dialogue box."
            : "Something went wrong. You either entered your email or password or both incorrectly. Please try again."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {willRedirect ? (
        <Redirect to="/home" />
      ) : (
        <Container>
         
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <h3>Login Form</h3>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          
          <Row>
            <Col md={{ span: 2, offset: 2 }}>
              <Button variant="primary" type="submit" onClick={LogUserIn}>
                LOGIN
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default Login;
