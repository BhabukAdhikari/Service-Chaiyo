import React from 'react';
import {
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
import { Header } from '../../mock/data';

import { TfiHeadphoneAlt } from "react-icons/tfi";


import './Navbar.css';

export const TopBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bg">
      <Container fluid>
        <Navbar.Brand href="/"> <TfiHeadphoneAlt />
          &nbsp; ServiceProvider</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {Header.map((item, index) => (
              <Nav.Link href={item.to} className={item.className} key={index}>{item.title}</Nav.Link>
            ))}
          </Nav>
          <Nav className='auth-head'>
            <Nav.Link href="/login">Login</Nav.Link>
            <div className="vertical"></div>
            <Nav.Link href="/register">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
