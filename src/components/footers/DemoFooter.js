/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                id="tooltip46149983"
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-twitter"></i>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip46149983">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle"
                color="facebook"
                id="tooltip844497435"
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip844497435">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle"
                color="dribbble"
                id="tooltip564081339"
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-dribbble"></i>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip564081339">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle"
                color="github"
                id="tooltip410519243"
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-github"></i>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip410519243">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr></hr>
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © 2020{" "}
                <a
                  href="https://www.creative-tim.com/?ref=adspr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/?ref=adspr-footer"
                    target="_blank"
                  >
                    Creative Tim
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adspr-footer"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/blog?ref=adspr-footer"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/license?ref=adspr-footer"
                    target="_blank"
                  >
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default DemoFooter;
