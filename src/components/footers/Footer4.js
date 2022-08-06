import React from "react";

// reactstrap components
import {
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavLink,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Footer4() {
  return (
    <>
      <footer className="footer footer-big">
        <Container>
          <div className="content">
            <Row>
              <Col md="4">
                <div className="column">
                  <img
                    alt="..."
                    className="logo"
                    src={require("assets/img/brand/blue.png")}
                  ></img>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Company</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Product</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        How it works
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Resources</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Case study
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Connect
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Help Center
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Contact</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Book a demo
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Mail us
                      </a>
                    </li>
                  </ul>
                  <div className="btn-wrapper profile text-left mt-3">
                    <Button
                      color=""
                      href="https://twitter.com/creativetim"
                      id="tooltip977015208"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip977015208">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      color=""
                      href="https://www.facebook.com/creativetim"
                      id="tooltip860625601"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip860625601">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      color=""
                      href="https://dribbble.com/creativetim"
                      id="tooltip576935159"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-slack"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip576935159">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col md="9">
                <div className="column">
                  <nav>
                    <ul>
                      <li className="d-inline-block">
                        <NavLink
                          href="https://www.creative-tim.com?ref=adspr-footer4"
                          target="_blank"
                        >
                          @Argon
                        </NavLink>
                      </li>
                      <li className="d-inline-block">
                        <NavLink
                          href="https://www.creative-tim.com/presentation?ref=adspr-footer4"
                          target="_blank"
                        >
                          Terms &amp; Conditions
                        </NavLink>
                      </li>
                      <li className="d-inline-block">
                        <NavLink
                          href="http://blog.creative-tim.com?ref=adspr-footer4"
                          target="_blank"
                        >
                          Privacy Policy
                        </NavLink>
                      </li>
                      <li className="d-inline-block">
                        <NavLink
                          href="https://www.creative-tim.com/license?ref=adspr-footer4"
                          target="_blank"
                        >
                          Legal Notice
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col md="3">
                <UncontrolledDropdown>
                  Language:{" "}
                  <Button
                    aria-expanded={false}
                    aria-haspopup={true}
                    className="text-primary"
                    color="link"
                    data-toggle="dropdown"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    role="button"
                  >
                    <i className="ni ni-chat-round"></i>
                    <span>English</span>
                  </Button>
                  <DropdownMenu
                    style={{
                      position: "absolute",
                      transform: "translate3d(0px, 42px, 0px)",
                      top: "0px",
                      left: "0px",
                      willChange: "transform",
                    }}
                    x-placement="bottom-start"
                  >
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Deutch</span>
                    </DropdownItem>
                    <DropdownItem
                      active
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>English</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Español</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Français</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Italiano</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="footer-description">
                  Mastercard is a registered trademark and the circles design is
                  a trademark of Mastercard International Incorporated. The
                  Spendesk Prepaid Card/This card is issued by Transact Payments
                  Limited pursuant to licence by Mastercard International
                  Incorporated. The Spendesk accounts are issued by Transact
                  Payments Limited. Transact Payments Limited is authorised and
                  regulated by the Gibraltar Financial Services Commission.
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer4;
