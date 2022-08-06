import React from "react";

// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Footer1() {
  const [searchFocus, setSearchFocus] = React.useState("");
  return (
    <>
      <div className="section section-shaped no-tilt">
        <div className="shape shape-style-1 shape-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="subscribe-line">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="6" sm="10">
                <div className="text-center">
                  <h4 className="title text-white">
                    Subscribe to our Newsletter
                  </h4>
                  <p className="description text-white">
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </div>
                <Form action="" className="mt-4" method="">
                  <Row>
                    <Col sm="8">
                      <FormGroup className={searchFocus}>
                        <InputGroup className="input-group-alternative mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Search"
                            type="text"
                            onFocus={() => setSearchFocus("focused")}
                            onBlur={() => setSearchFocus("")}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <Button block color="info" type="button">
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <footer className="footer bg-transparent">
          <Container>
            <Row>
              <Col md="3">
                <UncontrolledDropdown className="mt-2">
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    className="text-white"
                    color="link"
                    data-toggle="dropdown"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    role="button"
                  >
                    <i className="ni ni-pin-3"></i>
                    <span>United States</span>
                  </DropdownToggle>
                  <DropdownMenu x-placement="bottom-start">
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Australia</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Belgium</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Canada</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>France</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Italy</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Portugal</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Spain</span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>United States</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <br></br>
                <UncontrolledDropdown>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    className="text-white"
                    color="link"
                    data-toggle="dropdown"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    role="button"
                  >
                    <i className="ni ni-chat-round"></i>
                    <span>English</span>
                  </DropdownToggle>
                  <DropdownMenu x-placement="bottom-start">
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Deutch</span>
                    </DropdownItem>
                    <DropdownItem
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
                <li className="copyrights">© Argon Design System</li>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Products</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Payments</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Billing</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Connect</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Sigma</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Issuing</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Terminal</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Resources</h4>
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
                  <h4 className="mt-3">Company</h4>
                  <ul>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Support
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Jobs
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Guides
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Pricing
                      </a>
                    </NavItem>
                  </ul>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="column">
                  <h4 className="mt-3">Follow us:</h4>
                  <div className="btn-wrapper profile text-left">
                    <Button
                      color="twitter"
                      href="https://twitter.com/creativetim"
                      id="tooltip799285778"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip799285778">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      color="facebook"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip33856223"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip33856223">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      color="slack"
                      href="https://dribbble.com/creativetim"
                      id="tooltip521847749"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-slack"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip521847749">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default Footer1;
