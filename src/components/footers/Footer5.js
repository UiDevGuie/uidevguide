import React from "react";

// reactstrap components
import { Button, NavItem, Container, Row, Col } from "reactstrap";

// Core Components

function Footer5() {
  return (
    <>
      <footer className="footer footer-big">
        <Container>
          <div className="content">
            <Row>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">About Us</h4>
                  <ul>
                    <NavItem>
                      <a href="https://creative-tim.com/contact-us">
                        Contact Us
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="https://creative-tim.com/about-us">About Us</a>
                    </NavItem>
                    <NavItem>
                      <a href="https://creative-tim.com/blog">Blog</a>
                    </NavItem>
                    <NavItem>
                      <a href="https://opensource.org/licenses/MIT">License</a>
                    </NavItem>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Market</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Sales FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        How to Register
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Sell Goods
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Receive Payment
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Transactions Issues
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="4" xs="6">
                <div className="column">
                  <h4 className="mt-3">Social Feed</h4>
                  <div className="social-feed">
                    <div className="feed-line">
                      <i className="fab fa-instagram"></i>
                      <p>
                        How to handle ethical disagreements with your clients.
                      </p>
                    </div>
                    <div className="feed-line">
                      <i className="fab fa-twitter"></i>
                      <p>
                        The tangible benefits of designing at 1x pixel density.
                      </p>
                    </div>
                    <div className="feed-line">
                      <i className="fab fa-facebook-square"></i>
                      <p>
                        A collection of 25 stunning sites that you can use for
                        inspiration.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4" xs="6">
                <div className="column">
                  <h4 className="mt-3">Numbers Don't Lie</h4>
                  <h5>
                    14.521 <small className="text-muted">Freelancers</small>
                  </h5>
                  <h5>
                    1.423.183 <small className="text-muted">Transactions</small>
                  </h5>
                  <h4 className="mt-4 mb-4">Follow Us</h4>
                  <ul className="social-buttons">
                    <li>
                      <Button
                        className="btn-icon-only"
                        color="twitter"
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="btn-icon-only"
                        color="facebook"
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className="fab fa-facebook"></i>
                        </span>
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="btn-icon-only"
                        color="dribbble"
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className="fab fa-dribbble"></i>
                        </span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <hr></hr>
          <div className="copyright d-flex flex-row-reverse">
            Copyright © {new Date().getFullYear()} Creative Tim All Rights
            Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer5;
