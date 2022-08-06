import React from "react";

// reactstrap components
import {
  Button,
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

function PreFooter4() {
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <div className="subscribe-line subscribe-line-white">
        <Container>
          <Row>
            <Col className="mr-auto" lg="5">
              <h4 className="title">Get Tips &amp; Tricks every Week!</h4>
              <p className="description">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
            </Col>
            <Col
              className="d-flex justify-content-center flex-column ml-auto"
              lg="6"
            >
              <Form action="" method="">
                <Row>
                  <Col sm="8">
                    <FormGroup className={emailFocus}>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your Email..."
                          type="text"
                          onFocus={() => setEmailFocus("focused")}
                          onBlur={() => setEmailFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <Button
                      block
                      className="btn-round"
                      color="success"
                      type="button"
                    >
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PreFooter4;
