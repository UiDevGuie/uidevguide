import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// Core Components

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

const displays = ["1", "2", "3", "4"];

const textTypes = ["muted", "primary", "info", "success", "warning", "danger"];

function Typography() {
  return (
    <>
      <h2 className="mt-lg mb-5">
        <span>Typography</span>
      </h2>
      <h3 className="h4 text-success font-weight-bold">Headings</h3>
      {headings.map((prop, key) => {
        let Heading = prop;
        return (
          <Row className="py-3 align-items-center" key={key}>
            <Col sm="3">
              <small className="text-uppercase text-muted font-weight-bold">
                Heading {prop.replace("h", "")}
              </small>
            </Col>
            <Col sm="9">
              <Heading className="mb-0">Argon Design System PRO</Heading>
            </Col>
          </Row>
        );
      })}
      <h3 className="h4 text-success font-weight-bold mt-md">Display titles</h3>
      {displays.map((prop, key) => {
        let Heading = "h" + prop;
        return (
          <Row className="py-3 align-items-center" key={key}>
            <Col sm="3">
              <small className="text-uppercase text-muted font-weight-bold">
                Display {prop}
              </small>
            </Col>
            <Col sm="9">
              <Heading className={"mb-0 display-" + prop}>
                Argon Design System PRO
              </Heading>
            </Col>
          </Row>
        );
      })}
      <h3 className="h4 text-success font-weight-bold mt-md">
        Specialized titles
      </h3>
      <Row className="py-3 align-items-center">
        <Col sm="3">
          <small className="text-uppercase text-muted font-weight-bold">
            Heading
          </small>
        </Col>
        <Col sm="9">
          <h3 className="heading mb-0">Argon Design System PRO</h3>
        </Col>
      </Row>
      <Row className="py-3 align-items-center">
        <Col sm="3">
          <small className="text-uppercase text-muted font-weight-bold">
            Heading title
          </small>
        </Col>
        <Col sm="9">
          <h3 className="heading-title text-warning mb-0">
            Argon Design System PRO
          </h3>
        </Col>
      </Row>
      <Row className="py-3 align-items-center">
        <Col sm="3">
          <small className="text-uppercase text-muted font-weight-bold">
            Heading seaction
          </small>
        </Col>
        <Col sm="9">
          <div>
            <h2 className="display-3">Header with small subtitle</h2>
            <p className="lead text-muted">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </Col>
      </Row>
      <h3 className="h4 text-success font-weight-bold mt-md">Paragraphs</h3>
      <Row className="py-3 align-items-center">
        <Col sm="3">
          <small className="text-uppercase text-muted font-weight-bold">
            Paragraph
          </small>
        </Col>
        <Col sm="9">
          <p>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </Col>
      </Row>
      <Row className="py-3 align-items-center">
        <Col sm="3">
          <small className="text-uppercase text-muted font-weight-bold">
            Lead text
          </small>
        </Col>
        <Col sm="9">
          <p className="lead">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </Col>
      </Row>
      <Row className="py-3 align-items-center">
        <Col sm="3">
          <small className="text-uppercase text-muted font-weight-bold">
            Quote
          </small>
        </Col>
        <Col sm="9">
          <blockquote className="blockquote">
            <p className="mb-0">
              I always felt like I could do anything. That’s the main thing
              people are controlled by!
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>
      {textTypes.map((prop, key) => {
        return (
          <Row className="py-3 align-items-center" key={key}>
            <Col sm="3">
              <small className="text-uppercase font-weight-bold text-muted">
                {prop} text
              </small>
            </Col>
            <Col sm="9">
              <p className={"mb-0 text-" + prop}>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </p>
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default Typography;
