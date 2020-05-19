import React from 'react';
import styles from '../styles/Header.module.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Golden Coast Financial Services
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Services</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
