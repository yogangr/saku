/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgCompany1 from "../images/company1.png";
import imgCompany2 from "../images/company2.png";
import imgCompany3 from "../images/company3.png";
import imgCompany4 from "../images/company4.png";
import imgCompany5 from "../images/company5.png";

function FinanceComponent() {
  return (
    <Container>
      <div className="finance-text text-center">
        Finance flow has been featured on
      </div>
      <Row className="my-4">
        <Col>
          <img src={imgCompany1} />
        </Col>
        <Col>
          <img src={imgCompany2} />
        </Col>
        <Col>
          <img src={imgCompany3} />
        </Col>
        <Col>
          <img src={imgCompany4} />
        </Col>
        <Col>
          <img src={imgCompany5} />
        </Col>
      </Row>
    </Container>
  );
}

export default FinanceComponent;
