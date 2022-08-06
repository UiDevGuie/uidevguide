import React from "react";

// reactstrap components
import { Button, NavLink, Container, Row, Col } from "reactstrap";

// Core Components

function Footer3() {
  return (
    <>
      <footer className="footer footer-simple bg-gradient-default">
        <Container>
          <Row>
            <Col md="3">
              <a
                className="footer-brand"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Argon Design
              </a>
            </Col>
            <Col md="6">
              <div className="column">
                <ul className="inline-menu">
                  <li>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Presentation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Discover
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Payment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3" className="text-right">
              <ul className="social-buttons">
                <li>
                  <Button
                    className="btn-icon mr-2"
                    color="twitter"
                    href="https://twitter.com/CreativeTim"
                    size="sm"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>{" "}
                </li>
                <li>
                  <Button
                    className="btn-icon mr-2"
                    color="facebook"
                    href="https://www.facebook.com/CreativeTim"
                    size="sm"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon"
                    color="instagram"
                    href="https://www.instagram.com/CreativeTimOfficial"
                    size="sm"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer3;
