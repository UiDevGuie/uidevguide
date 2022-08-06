import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function PreFooter2() {
  return (
    <>
      <div className="social-line social-line-big-icons">
        <Container>
          <Row>
            <Col className="mb-md-4 mb-lg-0" lg="3" md="6">
              <Button
                className="btn-footer"
                color="gradient-twitter"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
                <p className="title">twitter</p>
                <p className="subtitle">@creativetim</p>
              </Button>
            </Col>
            <Col className="mb-md-4 mb-lg-0" lg="3" md="6">
              <Button
                className="btn-footer"
                color="gradient-facebook"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
                <p className="title">facebook</p>
                <p className="subtitle">@creativetim</p>
              </Button>
            </Col>
            <Col lg="3" md="6">
              <Button
                className="btn-footer"
                color="gradient-slack"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-slack"></i>
                <p className="title">slack</p>
                <p className="subtitle">@creativetim</p>
              </Button>
            </Col>
            <Col lg="3" md="6">
              <Button
                className="btn-footer"
                color="gradient-instagram"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-instagram"></i>
                <p className="title">instagram</p>
                <p className="subtitle">@creativetim</p>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PreFooter2;
