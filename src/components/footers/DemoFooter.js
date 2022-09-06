/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function DemoFooter() {
  const openLinkInNewTab = ( url ) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if ( newTab ) newTab.opener = null;
  }
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="youtube"
                id="tooltip46149983"
                onClick={ () => openLinkInNewTab(' https://www.youtube.com/channel/UCc46Ve-r8g04jfJNqbpRwFg')}
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-youtube"></i>
                </span>
              </Button>
            
              <Button
                className="btn-icon-only rounded-circle"
                color="facebook"
                id="tooltip844497435"
                onClick={ () => openLinkInNewTab('https://www.facebook.com/profile.php?id=100076646675944')}
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </Button>
             
              {/* <Button
                className="btn-icon-only rounded-circle"
                color="dribbble"
                id="tooltip564081339"
                onClick={ () => openLinkInNewTab('https://uidevguide.com')}
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-dribbble"></i>
                </span>
              </Button> */}
             
              <Button
                className="btn-icon-only rounded-circle"
                color="github"
                id="tooltip410519243"
                onClick={ () => openLinkInNewTab('https://github.com/UiDevGuide?tab=repositories')}
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-github"></i>
                </span>
              </Button>
              
            </Col>
          </Row>
          <hr></hr>
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © 2022{" "}
                <a
                  href="http://www.uidevguide.com/"
                  target="_blank"
                >
                  Ui Dev Guide
                </a>
                
              </div>
            </Col>
          
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default DemoFooter;
