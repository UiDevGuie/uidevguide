import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function BasicComponents() {
  return (
    <>
      <section className="section-basic-components">
        <Container>
          <Row>
            <Col className="mb-md-5" lg="5" md="10">
              <h1 className="display-3">
                Basic Elements
                <span className="text-primary">
                  The core elements of your website
                </span>
              </h1>
              <p className="lead">
                We re-styled every Bootstrap 4 element to match the Argon Design
                System style. All the Bootstrap 4 components that you need in a
                development have been re-design with the new look. Besides the
                numerous basic elements, we have also created additional
                classes. All these items will help you take your project to the
                next level.
              </p>
            </Col>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/presentation-page/table.png")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/card-btn.png")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/card-orange.png")}
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/slack-btn.png")}
                ></img>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/ill/example-3.svg")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BasicComponents;
