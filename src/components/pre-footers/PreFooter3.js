import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function PreFooter3() {
  return (
    <>
      <div className="social-line social-line-big-icons bg-default">
        <Container>
          <Row>
            <Col md="2">
              <Button
                className="btn-icon btn-footer"
                color="simple"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter text-white"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-icon btn-footer"
                color="simple"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-facebook-square text-white"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-icon btn-footer"
                color="simple"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-google-plus text-white"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-icon btn-footer"
                color="simple"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-dribbble text-white"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-icon btn-footer"
                color="simple"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-youtube text-white"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-icon btn-footer"
                color="simple"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-instagram text-white"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PreFooter3;
