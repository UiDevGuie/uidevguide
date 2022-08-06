import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Header2() {
  return (
    <>
      <header className="header-2 skew-separator">
        <Navbar className="bg-white navbar-absolute" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Creative Tim
              </NavbarBrand>
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#example-header-2"
                data-toggle="collapse"
                id="example-header-2"
                type="button"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <UncontrolledCollapse
              id="example-header-2"
              navbar
              toggler="#example-header-2"
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Argon <span>PRO</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button
                      aria-controls="navigation-index"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#example-header-2"
                      data-toggle="collapse"
                      id="example-header-2"
                      type="button"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav navbar-right" navbar>
                <NavItem>
                  <NavLink href="https://twitter.com/CreativeTim">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.facebook.com/CreativeTim">
                    <i className="fab fa-facebook-square"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.instagram.com/CreativeTimOfficial">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <div className="page-header">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/ill/p8.svg") + ")",
            }}
          ></div>
          <Container className="pt-300">
            <Row>
              <Col className="mx-auto text-center" md="8">
                <h2 className="display-2">Trello lets you work</h2>
              </Col>
            </Row>
            <Row>
              <div className="floating-box bg-default">
                <div className="box text-center">
                  <div className="icon icon-shape bg-success icon-xl rounded-circle text-white">
                    <i className="ni ni-spaceship"></i>
                  </div>
                </div>
                <h2 className="lead text-white p-5">
                  As a result of growing greenhouse gas emissions, climate
                  models predict that our planet will get significantly warmer,
                  that ecosystems will be changed or destroyed, and that
                  enormous human and economic costs will be incurred. These
                  scenarios aren’t guaranteed, but avoiding them will be very
                  hard. We’re trying to take small steps to mitigate our impact.
                </h2>
              </div>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header2;
