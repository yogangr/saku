/* eslint-disable no-unused-vars */
import React from "react";
import NavbarComponent from "../components/navbar";
import HeroComponent from "../components/HeroComponent";
import FinanceComponent from "../components/FinanceComponent";
import { Container } from "react-bootstrap";
import FiturComponent from "../components/FiturComponent";

function Home() {
  return (
    <Container className="home">
      <NavbarComponent />
      <HeroComponent />
      <FinanceComponent />
      <FiturComponent />
    </Container>
  );
}

export default Home;
