/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgHero from "../images/apple-computers.png";
import Button from "react-bootstrap/Button";

function HeroComponent() {
  return (
    <Container>
      <Row>
        <Col sm={7}>
          <Container className="hero">
            <div className="title-hero fw-bold">
              Welcome To SAKU Mobile Apps
            </div>
            <p className="subtitle-hero">
              Aplikasi SAKU merupakan aplikasi fintech yang menyediakan beberapa
              fitur untuk membantu anda dalam mengelola keuangan anda.
            </p>
            <div className="cta">
              <Button variant="success" className="btn-download">
                DOWNLOAD APP
              </Button>
              <Button variant="secondary" className="btn-pricing">
                VIEW PRICING
              </Button>
            </div>
          </Container>
        </Col>
        <Col sm={5}>
          <img src={imgHero} alt="" className="img-hero" />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroComponent;
