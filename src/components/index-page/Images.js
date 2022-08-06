import React from "react";

// reactstrap components
import { Row, Col, UncontrolledTooltip } from "reactstrap";

// Core Components

function Images() {
  return (
    <>
      <h2 className="mt-lg mb-5">
        <span>Images</span>
      </h2>
      <Row>
        <Col sm="3" xs="6">
          <small className="d-block text-uppercase font-weight-bold mb-4">
            Image
          </small>
          <img
            alt="..."
            className="img-fluid rounded shadow"
            src={require("assets/img/faces/team-1.jpg")}
            style={{ width: "150px" }}
          ></img>
        </Col>
        <Col sm="3" xs="6">
          <small className="d-block text-uppercase font-weight-bold mb-4">
            Circle Image
          </small>
          <img
            alt="..."
            className="img-fluid rounded-circle shadow"
            src={require("assets/img/faces/team-2.jpg")}
            style={{ width: "150px" }}
          ></img>
        </Col>
        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <small className="d-block text-uppercase font-weight-bold mb-4">
            Raised
          </small>
          <img
            alt="..."
            className="img-fluid rounded shadow-lg"
            src={require("assets/img/faces/team-3.jpg")}
            style={{ width: "150px" }}
          ></img>
        </Col>
        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <small className="d-block text-uppercase font-weight-bold mb-4">
            Circle Raised
          </small>
          <img
            alt="..."
            className="img-fluid rounded-circle shadow-lg"
            src={require("assets/img/faces/team-4.jpg")}
            style={{ width: "150px" }}
          ></img>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="3" xs="6">
          <small className="d-block text-uppercase font-weight-bold mb-4">
            Avatar group
          </small>
          <div className="avatar-group">
            <a
              className="avatar avatar-lg rounded-circle"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              id="tooltip109949260"
            >
              <img alt="..." src={require("assets/img/faces/team-1.jpg")}></img>
            </a>
            <UncontrolledTooltip delay={0} target="tooltip109949260">
              Ryan Tompson
            </UncontrolledTooltip>{" "}
            <a
              className="avatar avatar-lg rounded-circle"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              id="tooltip63795427"
            >
              <img alt="..." src={require("assets/img/faces/team-2.jpg")}></img>
            </a>
            <UncontrolledTooltip delay={0} target="tooltip63795427">
              Romina Hadid
            </UncontrolledTooltip>{" "}
            <a
              className="avatar avatar-lg rounded-circle"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              id="tooltip305470727"
            >
              <img alt="..." src={require("assets/img/faces/team-3.jpg")}></img>
            </a>
            <UncontrolledTooltip delay={0} target="tooltip305470727">
              Alexander Smith
            </UncontrolledTooltip>{" "}
            <a
              className="avatar avatar-lg rounded-circle"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              id="tooltip189410494"
            >
              <img alt="..." src={require("assets/img/faces/team-4.jpg")}></img>
            </a>
            <UncontrolledTooltip delay={0} target="tooltip189410494">
              Jessica Doe
            </UncontrolledTooltip>
          </div>
        </Col>
        <Col sm="6" xs="6">
          <small className="d-block text-uppercase font-weight-bold mb-4">
            Sizing
          </small>
          <a
            className="avatar avatar-xs rounded-circle"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img alt="..." src={require("assets/img/faces/team-4.jpg")}></img>
          </a>{" "}
          <a
            className="avatar avatar-sm rounded-circle"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img alt="..." src={require("assets/img/faces/team-4.jpg")}></img>
          </a>{" "}
          <a
            className="avatar rounded-circle"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img alt="..." src={require("assets/img/faces/team-4.jpg")}></img>
          </a>{" "}
          <a
            className="avatar avatar-lg rounded-circle"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img alt="..." src={require("assets/img/faces/team-4.jpg")}></img>
          </a>{" "}
          <a
            className="avatar avatar-xl rounded-circle"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img alt="..." src={require("assets/img/faces/team-4.jpg")}></img>
          </a>
        </Col>
      </Row>
    </>
  );
}

export default Images;
