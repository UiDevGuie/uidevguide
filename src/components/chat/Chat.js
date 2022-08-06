import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Media,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Chat() {
  const [searchFocus, setSearchFocus] = React.useState("");
  const [messageFocus, setMessageFocus] = React.useState("");
  return (
    <>
      <Row className="flex-row chat">
        <Col lg="4">
          <Card className="bg-secondary">
            <CardHeader className={"mb-3 " + searchFocus}>
              <InputGroup className="input-group-alternative">
                <Input
                  placeholder="Search contact"
                  type="text"
                  onFocus={() => setSearchFocus("focused")}
                  onBlur={() => setSearchFocus("")}
                ></Input>
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="ni ni-zoom-split-in"></i>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </CardHeader>
            <ListGroup className="list-group-chat" flush tag="div">
              <ListGroupItem
                className="active bg-gradient-primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tag="a"
              >
                <Media>
                  <img
                    alt="..."
                    className="avatar"
                    src={require("assets/img/faces/christian.jpg")}
                  ></img>
                  <Media body className="ml-2">
                    <div className="justify-content-between align-items-center">
                      <h6 className="mb-0 text-white">
                        Charlie Watson <Badge color="success"></Badge>
                      </h6>
                      <div>
                        <small>Typing...</small>
                      </div>
                    </div>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tag="a"
              >
                <Media>
                  <img
                    alt="..."
                    className="avatar shadow"
                    src={require("assets/img/faces/team-2.jpg")}
                  ></img>
                  <Media body className="ml-2">
                    <div className="justify-content-between align-items-center">
                      <h6 className="mb-0">Jane Doe</h6>
                      <div>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                    </div>
                    <Col
                      className="text-muted text-small p-0 text-truncate d-block"
                      tag="span"
                      xs="10"
                    >
                      Computer users and programmers
                    </Col>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tag="a"
              >
                <Media>
                  <img
                    alt="..."
                    className="avatar shadow"
                    src={require("assets/img/faces/team-3.jpg")}
                  ></img>
                  <Media body className="ml-2">
                    <div className="justify-content-between align-items-center">
                      <h6 className="mb-0">Mila Skylar</h6>
                      <div>
                        <small className="text-muted">24 min ago</small>
                      </div>
                    </div>
                    <Col
                      className="text-muted text-small p-0 text-truncate d-block"
                      tag="span"
                      xs="10"
                    >
                      You can subscribe to receive weekly...
                    </Col>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tag="a"
              >
                <Media>
                  <img
                    alt="..."
                    className="avatar shadow"
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                  <Media body className="ml-2">
                    <div className="justify-content-between align-items-center">
                      <h6 className="mb-0">Sofia Scarlett</h6>
                      <div>
                        <small className="text-muted">7 hours ago</small>
                      </div>
                    </div>
                    <Col
                      className="text-muted text-small p-0 text-truncate d-block"
                      tag="span"
                      xs="10"
                    >
                      It’s an effective resource regardless..
                    </Col>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tag="a"
              >
                <Media>
                  <img
                    alt="..."
                    className="avatar shadow"
                    src={require("assets/img/faces/team-5.jpg")}
                  ></img>
                  <Media body className="ml-2">
                    <div className="justify-content-between align-items-center">
                      <h6 className="mb-0">Tom Klein</h6>
                      <div>
                        <small className="text-muted">1 day ago</small>
                      </div>
                    </div>
                    <Col
                      className="text-muted text-small p-0 text-truncate d-block"
                      tag="span"
                      xs="10"
                    >
                      Be sure to check it out if your dev pro...
                    </Col>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col lg="8">
          <Card>
            <CardHeader className="d-inline-block">
              <Row>
                <Col md="10">
                  <Media className="align-items-center">
                    <img
                      alt="..."
                      className="avatar shadow"
                      src={require("assets/img/faces/christian.jpg")}
                    ></img>
                    <Media body>
                      <h6 className="mb-0 d-block">Charlie Watson</h6>
                      <span className="text-muted text-small">
                        last seen today at 1:53am
                      </span>
                    </Media>
                  </Media>
                </Col>
                <Col md="1" xs="3">
                  <Button
                    className="btn-text"
                    color="link"
                    data-placement="top"
                    id="tooltip558026681"
                    type="button"
                  >
                    <i className="ni ni-book-bookmark"></i>
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target="tooltip558026681"
                  >
                    Video call
                  </UncontrolledTooltip>
                </Col>
                <Col md="1" xs="3">
                  <UncontrolledDropdown>
                    <Button
                      className="text-primary"
                      color="link"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="ni ni-settings-gear-65"></i>
                    </Button>
                    <DropdownMenu right>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="ni ni-single-02"></i>
                        Profile
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="ni ni-notification-70"></i>
                        Mute conversation
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="ni ni-key-25"></i>
                        Block
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="ni ni-button-power"></i>
                        Clear chat
                      </DropdownItem>
                      <DropdownItem divider></DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="ni ni-fat-remove"></i>
                        Delete chat
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-start">
                <Col className="col-auto">
                  <Card>
                    <CardBody className="p-2">
                      <p className="mb-1">
                        It contains a lot of good lessons about effective
                        practices
                      </p>
                      <div>
                        <small className="opacity-60">
                          <i className="far fa-clock"></i>
                          3:14am
                        </small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-end text-right">
                <Col className="col-auto">
                  <Card className="bg-gradient-primary text-white">
                    <CardBody className="p-2">
                      <p className="mb-1">
                        Can it generate daily design links that include essays
                        and data visualizations ?<br></br>
                      </p>
                      <div>
                        <small className="opacity-60">3:30am</small>
                        <i className="ni ni-check-bold"></i>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-center" md="12">
                  <Badge className="text-default">Wed, 3:27pm</Badge>
                </Col>
              </Row>
              <Row className="justify-content-start">
                <Col className="col-auto">
                  <Card>
                    <CardBody className="p-2">
                      <p className="mb-1">
                        Yeah! Responsive Design is geared towards those trying
                        to build web apps
                      </p>
                      <div>
                        <small className="opacity-60">
                          <i className="far fa-clock"></i>
                          4:31pm
                        </small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-end text-right">
                <Col className="col-auto">
                  <Card className="bg-gradient-primary text-white">
                    <CardBody className="p-2">
                      <p className="mb-1">Excellent, I want it now !</p>
                      <div>
                        <small className="opacity-60">4:40pm</small>
                        <i className="ni ni-check-bold"></i>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-start">
                <Col className="col-auto">
                  <Card>
                    <CardBody className="p-2">
                      <p className="mb-1">
                        You can easily get it; The content here is all free
                      </p>
                      <div>
                        <small className="opacity-60">
                          <i className="far fa-clock"></i>
                          4:42pm
                        </small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-end text-right">
                <Col className="col-auto">
                  <Card className="bg-gradient-primary text-white">
                    <CardBody className="p-2">
                      <p className="mb-1">
                        Awesome, blog is important source material for anyone
                        who creates apps? beacuse these blogs offer a lot of
                        information about website development.
                      </p>
                      <div>
                        <small className="opacity-60">4:46pm</small>
                        <i className="ni ni-check-bold"></i>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-start">
                <Col xs="5">
                  <Card>
                    <CardBody className="p-2">
                      <Col className="p-0" xs="12">
                        <img
                          alt="..."
                          className="img-fluid rounded mb-1"
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                        ></img>
                      </Col>
                      <div>
                        <small className="opacity-60">
                          <i className="far fa-clock"></i>
                          4:47pm
                        </small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-end text-right">
                <Col className="col-auto">
                  <Card className="bg-gradient-primary text-white">
                    <CardBody className="p-2">
                      <p className="mb-0">
                        At the end of the day … the native dev apps is where
                        users are
                      </p>
                      <div>
                        <small className="opacity-60">4:47pm</small>
                        <i className="ni ni-check-bold"></i>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-start">
                <Col className="col-auto">
                  <Card>
                    <CardBody className="p-2">
                      <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                      <p className="d-inline-block mr-2 mb-1 mt-1">Typing...</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="d-block">
              <FormGroup className={messageFocus}>
                <InputGroup className="mb-4">
                  <Input
                    placeholder="Your message"
                    type="text"
                    onFocus={() => setMessageFocus("focused")}
                    onBlur={() => setMessageFocus("")}
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="ni ni-send"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Chat;
