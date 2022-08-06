import React from "react";

// reactstrap components
import { Badge, Button, Row, Col } from "reactstrap";

// Core Components

const colors = [
  "default",
  "primary",
  "secondary",
  "info",
  "success",
  "danger",
  "warning",
];

function Badges() {
  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4 mt-4">Labels</h3>
      <Row>
        <Col md="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              Contextual variations
            </small>
          </div>
          {colors.map((prop, key) => {
            return (
              <React.Fragment key={key}>
                <Badge color={prop}>{prop}</Badge>{" "}
              </React.Fragment>
            );
          })}
          <div className="mb-2 mt-2">
            <small className="text-uppercase font-weight-bold">
              Pill Badges
            </small>
          </div>
          {colors.map((prop, key) => {
            return (
              <React.Fragment key={key}>
                <Badge pill color={prop}>
                  {prop}
                </Badge>{" "}
              </React.Fragment>
            );
          })}
          <div className="mb-2 mt-2">
            <small className="text-uppercase font-weight-bold">Links</small>
          </div>
          {colors.map((prop, key) => {
            return (
              <React.Fragment key={key}>
                <Badge
                  pill
                  color={prop}
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  {prop}
                </Badge>{" "}
              </React.Fragment>
            );
          })}
        </Col>
        <Col md="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">Style</small>
          </div>
          <Button color="default" type="button">
            <span>Unread messages</span>
            <Badge color="primary">24</Badge>
          </Button>
          <Button color="primary" type="button">
            <span>Notifications</span>
            <Badge
              className="badge-md badge-circle badge-floating border-white"
              color="danger"
            >
              4
            </Badge>
          </Button>
          <div className="mb-3 mt-2">
            <small className="text-uppercase font-weight-bold">Sizes</small>
          </div>
          <Badge color="primary" pill>
            Default
          </Badge>
          <Badge className="badge-md" color="warning" pill>
            Medium
          </Badge>
          <Badge className="badge-lg" color="success" pill>
            Large badge
          </Badge>
        </Col>
      </Row>
    </>
  );
}

export default Badges;
