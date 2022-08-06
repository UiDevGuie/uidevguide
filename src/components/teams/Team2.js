import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Team2() {
  return (
    <>
      <div className="team-2">
        <Container>
          <Row>
            <Col className="mx-auto text-center mb-5" md="8">
              <h3 className="display-3">The Executive Team</h3>
              <h4 className="lead">
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h4>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-profile" data-image="profile-image">
                <CardHeader>
                  <div className="card-image">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon-only"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Edit Profile
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Settings
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Log out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/faces/ali-pazani.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h4 className="display-4 mb-0">Sofia Scarlett</h4>
                  <p className="lead">UX Designer</p>
                  <div className="table-responsive">
                    <ul className="list-unstyled">
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-atom"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Keen on great design</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-user-run"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Outdors lover</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-chart-bar-32"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile" data-image="profile-image">
                <CardHeader>
                  <div className="card-image">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon-only"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Edit Profile
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Settings
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Log out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/faces/team-5.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h4 className="display-4 mb-0">Dylan Wyatt</h4>
                  <p className="lead">Team Lead</p>
                  <div className="table-responsive">
                    <ul className="list-unstyled">
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-atom"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Dedicated entrepreneur</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-user-run"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Urban exploration</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-chart-bar-32"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">
                              Able to get good at everything
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile" data-image="profile-image">
                <CardHeader>
                  <div className="card-image">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon-only"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Edit Profile
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Settings
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Log out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/faces/atikh.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h4 className="display-4 mb-0">Mila Skylar</h4>
                  <p className="lead">Content Creator</p>
                  <div className="table-responsive">
                    <ul className="list-unstyled">
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-atom"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">High quality publication</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-user-run"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Storytelling</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-chart-bar-32"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">
                              Master of words qualification
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team2;
