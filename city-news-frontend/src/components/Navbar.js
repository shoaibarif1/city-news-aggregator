// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="shadow-lg"
      style={{ transition: "all 0.4s ease" }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-warning">
          <span role="img" aria-label="news">📰</span> CityNews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="#top-news" className="px-3 text-light hover:text-warning transition-all">
              Top News
            </Nav.Link>
            <Nav.Link href="#feed" className="px-3 text-light hover:text-info transition-all">
              News Feed
            </Nav.Link>
            <Nav.Link href="#trending" className="px-3 text-light hover:text-success transition-all">
              <span role="img" aria-label="trending">📈</span> Trending Tweets
            </Nav.Link>
            <Nav.Link href="#media" className="px-3 text-light hover:text-danger transition-all">
              <span role="img" aria-label="media">🎥</span> Trending Media
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
