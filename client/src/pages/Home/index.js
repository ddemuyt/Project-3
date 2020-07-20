import React, { useState } from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import "./home.css";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col md= {12}>
          <h2 className="text-center">Welcome to Exchanging Hands!</h2>
        </Col>
      </Row>
      <Row>
        <Carousel className="h-50" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src="/joel-muniz-A4Ax1ApccfA-unsplash.jpg" alt="Volunteers unloading a truck of supplies" />
            <Carousel.Caption>
              <h3>Get Involved</h3>
              <p>Find local charities to volunteer your time!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/larm-rmah-AEaTUnvneik-unsplash.jpg" alt="A group of children smiling for the camera" />
            <Carousel.Caption>
              <h3>Send Donations</h3>
              <p>Select charities to help fund raise programs!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/perry-grone-lbLgFFlADrY-unsplash.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Thank You</h3>
              <p>Without you, we could not help those in need!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Home;
