/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgFitur from "../images/img-fitur.png";

function FiturComponent() {
  return (
    <Container>
      <div className="fitur-title text-center">Fitur Unggulan</div>
      <Container className="card">
        <Row className="item-card">
          <Col className="item-1">
            <img src={imgFitur} className="img-fitur" />
          </Col>
          <Col className="item-2">
            <div className="title-fitur">Student Financial</div>
            <p className="desc-fitur">
              Fitur unggulan yang memudahkan kebutuhan keuangan para mahasiswa
            </p>
            <div className="title-fitur">Student Planner</div>
            <p className="desc-fitur">
              Tabungan rencana yang dapat dikustomisasi sesuai keinginan
              mahasiswa{" "}
            </p>
            <div className="title-fitur">Pembayaran UKT</div>
            <p className="desc-fitur">
              Kemudahan membayar UKT dalam satu aplikasi
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FiturComponent;
