import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Style/Navbar.css";
import { BsBag } from "react-icons/bs";
const NavBar = () => {
  return (
    <>
      <div className="main">
        <Navbar collapseOnSelect expand="sm">
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navbarScroll"
          />
           <img className="logoImg" src="./logo.PNG" />
            <Navbar.Brand className="logoText" href="#home">
              FoodSpin
            </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
              <Nav >
                <div className="nav2">
                  <Nav.Link id="menu" href="#breakfast">
                    BreakFast
                  </Nav.Link>
                  <Nav.Link id="menu" href="#lunch">
                    Lunch
                  </Nav.Link>
                  <Nav.Link id="menu" href="#dinner">
                    Dinner
                  </Nav.Link>
                </div>
              </Nav>
          </Navbar.Collapse>
          <Nav.Link className="bag">
                <BsBag className="bagIcon" />
              </Nav.Link>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
