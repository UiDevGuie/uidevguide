import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Content() {
  return (
    <>
      <section className="section-content">
        <Container>
          <Row>
            <Col className="mt-md-5 order-md-2 order-lg-1" lg="6">
              <div className="image-container">
                <img
                  alt="..."
                  className="img shadow rounded img-comments w-100"
                  src={require("assets/img/presentation-page/content-2.png")}
                ></img>
                <img
                  alt="..."
                  className="img shadow rounded img-blog mt-5 w-100"
                  src={require("assets/img/presentation-page/content-1.png")}
                ></img>
              </div>
            </Col>
            <Col className="mx-auto order-md-1" lg="6">
              <div className="section-description">
                <h1 className="display-3">
                  Content Areas
                  <span className="text-danger">
                    For Areas that Need More Space
                  </span>
                </h1>
                <p className="lead">
                  We took into consideration multiple use cases and came up with
                  some specific areas for you. If you need elements such as
                  tables, comments, description areas, tabs and many others,
                  we've got you covered. They're beautiful and easy to use for
                  the end user navigating your website.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Content;
