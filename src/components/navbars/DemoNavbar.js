import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function DemoNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"sticky-top navbar-main headroom " + navbarType} 
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          {/* <NavbarBrand className="mr-lg-5" to="/index" tag={Link}>
            <img alt="..." src={require("assets/img/brand/white.png")}></img>
          </NavbarBrand> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="Logo"
                      src={require("assets/img/brand/blue.png")}
                    ></img>
                  </Link>
                </Col>
                {/* <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col> */}
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            > 
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-app d-lg-none"></i>
                  <span className="nav-link-inner--text">Design Blocks</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem tag={Link} to="/sections#headers">
                    <i className="ni ni-album-2 text-info"></i>
                    Headers
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#features">
                    <i className="ni ni-settings text-danger"></i>
                    Features
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#blogs">
                    <i className="ni ni-align-left-2 text-primary"></i>
                    Blogs
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#teams">
                    <i className="ni ni-user-run text-danger"></i>
                    Teams
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#projects">
                    <i className="ni ni-paper-diploma text-purple"></i>
                    Projects
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#pricing">
                    <i className="ni ni-money-coins text-pink"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#testimonials">
                    <i className="ni ni-chat-round text-muted"></i>
                    Testimonials
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#contact-us">
                    <i className="ni ni-mobile-button text-success"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#tables">
                    <i className="ni ni-chart-bar-32 text-default"></i>
                    Tables
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#accordion">
                    <i className="ni ni-collection text-yellow"></i>
                    Accordion
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-tablet-button d-lg-none"></i>
                  <span className="nav-link-inner--text">App Pages</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/account-settings" tag={Link}>
                    <i className="ni ni-lock-circle-open text-muted"></i>
                    Account Settings
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="ni ni-tv-2 text-danger"></i>
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="ni ni-air-baloon text-pink"></i>
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/reset-page" tag={Link}>
                    <i className="ni ni-atom text-info"></i>
                    Reset Page
                  </DropdownItem>
                  <DropdownItem to="/invoice-page" tag={Link}>
                    <i className="ni ni-bullet-list-67 text-success"></i>
                    Invoice Page
                  </DropdownItem>
                  <DropdownItem to="/checkout-page" tag={Link}>
                    <i className="ni ni-basket text-orange"></i>
                    Checkout Page
                  </DropdownItem>
                  <DropdownItem to="/chat-page" tag={Link}>
                    <i className="ni ni-chat-round text-primary"></i>
                    Chat Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
