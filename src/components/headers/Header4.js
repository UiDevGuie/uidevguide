import React from "react";

// reactstrap components
import {
  Button,
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

function Header4() {
  return (
    <>
      <header className="header-4 skew-separator">
        <div className="header-wrapper">
          <Navbar className="navbar-transparent" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Creative Tim
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#example-header-4"
                  data-toggle="collapse"
                  id="example-header-4"
                  type="button"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <UncontrolledCollapse
                id="example-header-4"
                navbar
                toggler="#example-header-4"
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
                        data-target="#example-header-4"
                        data-toggle="collapse"
                        id="example-header-4"
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
          <div className="page-header header-video">
            <div className="overlay"></div>
            <video
              autoPlay="autoPlay"
              loop="loop"
              muted="muted"
              playsInline="playsInline"
            >
              <source
                src={require("assets/videos/Lights - 26607.mp4")}
                type="video/mp4"
              ></source>
            </video>
            <Container className="text-center">
              <Row>
                <Col className="mx-auto" lg="7">
                  <h1 className="video-text">People stories</h1>
                  <h1 className="display-3 text-white">
                    The time is right now!
                  </h1>
                  <Button
                    className="btn-icon mt-3 mb-sm-0"
                    color="warning"
                    href="https://www.creative-tim.com/product/argon-design-system-pro-react?ref=adspr-header4"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-button-play"></i>
                    </span>
                    <span className="btn-inner--text">Play more</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header4;
