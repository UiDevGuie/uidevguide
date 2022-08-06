import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function HeaderProductPage() {
  return (
    <>
      <div className="page-header header-filter page-header-small skew-separator skew-mini">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/pages/boxed-water.jpg") + ")",
          }}
        ></div>
        <Container>
          <Row>
            <Col className="mr-auto text-left" lg="7" md="7">
              <h1 className="title text-white">Our products</h1>
              <br></br>
              <h4 className="category text-white opacity-8">
                This is the best way to find your favorite stuff
              </h4>
            </Col>
          </Row>
        </Container>
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </>
  );
}

export default HeaderProductPage;
