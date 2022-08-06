import React from "react";

// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Dropdowns() {
  return (
    <>
      <Col className="mt-md-5 mt-lg-0" lg="6" md="12">
        <h3 className="h4 text-success font-weight-bold mb-4">Dropdowns</h3>
        <Row>
          <Col md="4">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Multilevel
              </small>
            </div>
            <UncontrolledDropdown>
              <DropdownToggle
                block
                color="primary"
                id="multiDropdownMenu"
                type="button"
              >
                Click here <div className="ripple-container"></div>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="multiDropdownMenu">
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Another action
                </DropdownItem>
                <UncontrolledDropdown className="d-block">
                  <DropdownToggle
                    caret
                    className="dropdown-item"
                    color="default"
                    tag="a"
                  >
                    Submenu
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Submenu action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Submenu action
                    </DropdownItem>
                    <UncontrolledDropdown className="d-block">
                      <DropdownToggle
                        caret
                        className="dropdown-item"
                        color="default"
                        id="multiSubMenu1"
                        tag="a"
                      >
                        Subsubmenu
                      </DropdownToggle>
                      <DropdownMenu aria-labelledby="multiSubMenu1">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Subsubmenu action 1
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Subsubmenu action 2
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="d-block">
                      <DropdownToggle
                        caret
                        className="dropdown-item"
                        color="default"
                        id="multiSubMenu2"
                        tag="a"
                      >
                        Second subsubmenu
                      </DropdownToggle>
                      <DropdownMenu aria-labelledby="multiSubMenu2">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Subsubmenu action 1
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Subsubmenu action 2
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col md="4">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Dropdown
              </small>
            </div>
            <UncontrolledDropdown>
              <DropdownToggle color="primary" role="button">
                <span>Click me</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-single-02"></i>
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-support-16"></i>
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run"></i>
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col md="4">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">Dropup</small>
            </div>
            <UncontrolledDropdown direction="up">
              <DropdownToggle color="primary" role="button">
                <span>Click me</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-single-02"></i>
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-support-16"></i>
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run"></i>
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Dropdowns;
