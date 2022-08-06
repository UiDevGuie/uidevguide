import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function ContactUs1() {
  const [firstNameFocus, setFirstNameFocus] = React.useState("");
  const [lastNameFocus, setLastNameFocus] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <div
        className="contactus-1 bg-default"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/1.svg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col
              className="d-flex justify-content-center flex-column"
              lg="5"
              md="5"
            >
              <h2 className="title text-white">Get in Touch</h2>
              <h4 className="description text-white">
                You need more information? Check what other persons are saying
                about our product. They are very happy with their purchase.
              </h4>
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
                  <i className="ni ni-square-pin"></i>
                </div>
                <div className="description">
                  <h4 className="info-title text-white">
                    Find us at the office
                  </h4>
                  <p className="description ml-3 text-white">
                    Bld Mihail Kogalniceanu, nr. 8,<br></br>
                    7652 Bucharest,<br></br>
                    Romania
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
                  <i className="ni ni-mobile-button"></i>
                </div>
                <div className="description">
                  <h4 className="info-title text-white">Give us a ring</h4>
                  <p className="description ml-3 text-white">
                    Michael Jordan<br></br>
                    +40 762 321 762<br></br>
                    Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" lg="5" md="7">
              <Card className="card-contact card-raised">
                <Form id="contact-form-1" method="post" role="form">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Contact Us</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <FormGroup className={firstNameFocus}>
                          <label>First name</label>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={() => setFirstNameFocus("focused")}
                              onBlur={() => setFirstNameFocus("")}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="6">
                        <FormGroup className={lastNameFocus}>
                          <label>Last name</label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-collection"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              placeholder="Last Name..."
                              type="text"
                              onFocus={() => setLastNameFocus("focused")}
                              onBlur={() => setLastNameFocus("")}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup className={emailFocus}>
                      <label>Email address</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Here..."
                          type="text"
                          onFocus={() => setEmailFocus("focused")}
                          onBlur={() => setEmailFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="contact-us-message-1"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <div className="custom-control custom-checkbox mt-2">
                          <input
                            className="custom-control-input"
                            id="customCheck"
                            type="checkbox"
                          ></input>
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            <span>I'm not a robot</span>
                          </label>
                        </div>
                      </Col>
                      <Col md="6">
                        <Button
                          className="pull-right"
                          color="primary"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs1;
