import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Form, Button, Modal, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./signup.css";

function Signup() {
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const passwordInputRef = useRef();
  const [willRedirect, setWillRedirect] = useState(false);
  const [show, setShow] = useState(false);
  const [signupStatus, setSignupStatus] = useState();

  function signUpUser(e) {
    e.preventDefault();

    // Setting our component's initial state
    if (!emailInputRef.current.value || !passwordInputRef.current.value) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    API.userSignup({
      email: emailInputRef.current.value,
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      password: passwordInputRef.current.value,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSignupStatus(true);
          setShow(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShow(true);
      });
  }

  const handleClose = () => {
    setShow(false);
    if (signupStatus) {
      setWillRedirect(true);
    }
  };

  return (
    <Container>
      <Modal backdrop="static" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Signup Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {signupStatus
            ? "Congratulations!! You have successfully signed up.  Please close this dialogue box to be redirected to the login page."
            : "The email you just entered has already been used. Please use a different email to sign up."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {willRedirect ? (
        <Redirect to="/login" />
      ) : (
        <Container fluid="md">
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <h3>Signup Form</h3>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    ref={emailInputRef}
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    ref={firstNameInputRef}
                    type="firstName"
                    name="firstName"
                    placeholder="First name"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    ref={lastNameInputRef}
                    type="lastName"
                    name="lastName"
                    placeholder="Last name"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passwordInputRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 2, offset: 2 }}>
              <Button variant="primary" type="submit" onClick={signUpUser}>
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default Signup;
