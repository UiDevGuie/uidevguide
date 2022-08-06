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

function NavbarSuccess() {
  const [collapseOpen, toggleCollapseOpen] = React.useState(false);
  return (
    <>
      <Navbar className="navbar-dark bg-success" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            Success Color
          </NavbarBrand>
          <button
            className="navbar-toggler"
            onClick={() => toggleCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse isOpen={collapseOpen} navbar>
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
                  className="nav-link-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="ni ni-favourite-28"></i>
                  <span className="nav-link-inner--text d-lg-none">
                    Favorites
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="ni ni-planet"></i>
                  <span className="nav-link-inner--text d-lg-none">
                    Another action
                  </span>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  className="nav-link-icon"
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  id="navbar-success_dropdown_1"
                  nav
                  role="button"
                >
                  <i className="ni ni-settings-gear-65"></i>
                  <span className="nav-link-inner--text d-lg-none">
                    Settings
                  </span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbar-success_dropdown_1" right>
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
}

export default NavbarSuccess;
