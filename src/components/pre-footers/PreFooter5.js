import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

// Core Components

function PreFooter5() {
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <div className="subscribe-line bg-default">
        <Container>
          <Row>
            <Col className="mx-auto" lg="8" xs="10">
              <div className="text-center">
                <h4 className="title text-white">
                  Subscribe to our Newsletter
                </h4>
                <p className="description text-white">
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <Card className="card-raised card-form-horizontal">
                <CardBody>
                  <Form action="" method="">
                    <Row>
                      <Col sm="8">
                        <InputGroup className={emailFocus}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your Email..."
                            type="email"
                            onFocus={() => setEmailFocus("focused")}
                            onBlur={() => setEmailFocus("")}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col sm="4">
                        <Button block color="primary" type="button">
                          Subscribe
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PreFooter5;
