import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
const MenuBase = ({ type }) => {
  const [collapseOpen, toggleCollapseOpen] = React.useState(false);
  return (
    <>
      <Navbar
        className={
          "navbar-dark rounded " +
          (type === "text" ? "bg-primary" : "bg-success")
        }
        expand="lg"
      >
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            Menu
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="..."
                      src={require("assets/img/brand/blue.png")}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapseOpen(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  className={type === "icons" ? "nav-link-icon" : ""}
                  onClick={(e) => e.preventDefault()}
                >
                  {type === "text" ? (
                    <>
                      Discover <span className="sr-only">(current)</span>
                    </>
                  ) : (
                    <>
                      <i className="ni ni-favourite-28"></i>
                      <span className="nav-link-inner--text d-lg-none">
                        Discover
                      </span>
                    </>
                  )}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  className={type === "icons" ? "nav-link-icon" : ""}
                  onClick={(e) => e.preventDefault()}
                >
                  {type === "text" ? (
                    <>Profile</>
                  ) : (
                    <>
                      <i className="ni ni-notification-70"></i>
                      <span className="nav-link-inner--text d-lg-none">
                        Profile
                      </span>
                    </>
                  )}
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  id="nav-inner-primary_dropdown_1"
                  nav
                  role="button"
                  className={type === "icons" ? "nav-link-icon" : ""}
                >
                  {type === "text" ? (
                    <>Settings</>
                  ) : (
                    <>
                      <i className="ni ni-settings-gear-65"></i>
                      <span className="nav-link-inner--text d-lg-none">
                        Settings
                      </span>
                    </>
                  )}
                </DropdownToggle>
                <DropdownMenu aria-labelledby="nav-inner-primary_dropdown_1">
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

function Menus() {
  return (
    <>
      <Row className="justify-content-center mt-md">
        <Col lg="12">
          <h3 className="h4 text-success font-weight-bold mb-4">Menu</h3>
          <Row>
            <Col lg="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With text
                </small>
              </div>
              <MenuBase type="text" />
            </Col>
            <Col className="mt-4 mt-lg-0" lg="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With icons
                </small>
              </div>
              <MenuBase type="icons" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Menus;
