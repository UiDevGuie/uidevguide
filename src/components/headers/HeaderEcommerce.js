import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function HeaderEcommerce() {
  return (
    <>
      <div className="page-header page-header-small header-filter skew-separator skew-mini">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/pages/kevin-grieve.jpg") + ")",
          }}
        ></div>
        <Container className="pt-0">
          <Row>
            <Col className="mx-auto text-center" lg="6" md="7">
              <h1 className="title text-white">See our latest collection!</h1>
              <br></br>
              <div className="buttons">
                <Button
                  className="btn-round d-inline"
                  color="danger"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="ni ni-cart ml-1"></i>
                </Button>
                <p className="mt-3 d-inline text-white">Shop Now!</p>
              </div>
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

export default HeaderEcommerce;
