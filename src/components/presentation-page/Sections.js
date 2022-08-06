import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function Sections() {
  return (
    <>
      <section className="section-sections bg-secondary">
        <Container>
          <Col className="mx-auto" md="8">
            <div className="section-description text-center">
              <h2 className="display-2">Sections you will love</h2>
              <p className="lead">
                Build pages in no time using pre-made sections! From headers to
                footers, you will be able to choose the best combination for
                your project. We have created multiple sections for you to put
                together and customise into pixel perfect example pages.
              </p>
              <Button
                className="btn-round"
                color="primary"
                to="/sections"
                tag={Link}
              >
                View All Sections
              </Button>
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/header-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/header-2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/header-3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/header-4.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/feature-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/feature-2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/feature-3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/feature-4.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/blog-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/blog-2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/blog-3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/blog-4.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/blog-5.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/team-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/team-2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/team-3.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page//sections/team-4.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/team-5.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/project-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/project-2.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/project-3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/pricing-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/pricing-2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/pricing-3.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/pricing-4.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/pricing-5.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/testimonial-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/testimonial-2.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/testimonial-3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/contact-1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/contact-2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/contact-3.jpg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col className="ml-auto" md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/contact-4.jpg")}
                ></img>
              </Col>
              <Col className="mr-auto" md="3">
                <img
                  alt="..."
                  className="shadow"
                  src={require("assets/img/presentation-page/sections/table-1.jpg")}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Sections;
