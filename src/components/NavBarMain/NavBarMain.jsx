import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import styles from "./NavBarMain.module.scss";

const NavBarMain = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Test One</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="weather">Weather API</Nav.Link>
        <Nav.Link href="quiz">Quiz</Nav.Link>
        <Nav.Link href="football">Fooball 11</Nav.Link> 
      </Nav>
    </Navbar>
  );
};

export default NavBarMain;
