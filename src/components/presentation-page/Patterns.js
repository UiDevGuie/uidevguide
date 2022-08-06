import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components
function Patterns() {
  return (
    <>
      <section className="section-patterns">
        <Container fluid>
          <Row>
            <Col className="mx-auto text-center align" lg="4" md="10" xs="12">
              <h1 className="display-3">
                Wonderful Patterns
                <span className="text-primary">
                  Different styles, colors and emotions
                </span>
              </h1>
              <p className="lead">
                Devices mockups, Branding mockups, UI/UX Tools, Illustrations
                and much more. Free and premium. Use Paaatterns together with
                powerful design system and speed up your workflow
              </p>
              <Button
                color="primary"
                href="https://www.ls.graphics/?status=accepted&amp;expires=1574163072&amp;seller=15046&amp;affiliate=102023&amp;link=1681&amp;p_tok=05cf15f3-a34b-4dd4-aa6b-a4e8652ed45b"
                target="_blank"
              >
                View more
              </Button>
            </Col>
            <Col lg="6" md="12">
              <img
                alt="..."
                className="w-50 pattern-1 shadow"
                src={require("assets/img/presentation-page/layer-1.jpg")}
              ></img>{" "}
              <img
                alt="..."
                className="w-50 pattern-2 shadow"
                src={require("assets/img/presentation-page/layer-2.jpg")}
              ></img>{" "}
              <img
                alt="..."
                className="w-50 pattern-3 shadow"
                src={require("assets/img/presentation-page/layer-3.jpg")}
              ></img>{" "}
              <img
                alt="..."
                className="w-50 pattern-4 shadow"
                src={require("assets/img/presentation-page/layer-4.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Patterns;
