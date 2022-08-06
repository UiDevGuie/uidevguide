import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function PreFooter1() {
  return (
    <>
      <div className="social-line social-line-blue text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <h4 className="title mb-4">Thank you for your support!</h4>
            </Col>
            <Button
              className="btn-round"
              color="twitter"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
              Twitter · 2.5k
            </Button>
            <Button
              className="btn-round"
              color="facebook"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
              Facebook · 3.2k
            </Button>
            <Button
              className="btn-round"
              color="tumblr"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-tumblr"></i>
              Tumblr · 1.2k
            </Button>
            <Button
              className="btn-round"
              color="dribbble"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-dribbble"></i>
              Dribbble · 1.8k
            </Button>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PreFooter1;
