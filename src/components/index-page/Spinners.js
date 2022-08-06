import React from "react";

// reactstrap components
import { Button, Row, Col, Spinner } from "reactstrap";

// Core Components

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "default",
];

const SpinnersBase = ({ type }) => {
  return (
    <>
      <Col md="6">
        <div className="mb-3 mt-5">
          <small className="text-uppercase font-weight-bold">
            {type} Spinners
          </small>
        </div>
        <Spinner color="" type={type}></Spinner>
        <span className="sr-only">Loading...</span>

        <Button
          className="ml-2 mb-2"
          color="primary"
          disabled
          size="sm"
          type="button"
        >
          <Spinner color="" type={type} size="sm"></Spinner>
          <span className="sr-only">Loading...</span>
        </Button>
        <Button
          className="mb-2"
          color="primary"
          disabled
          size="sm"
          type="button"
        >
          <Spinner color="" type={type} size="sm"></Spinner> Loading...
        </Button>
        <br></br>
        <br></br>
        <small className="text-uppercase font-weight-bold">Colors</small>
        <br></br>
        <br></br>
        {colors.map((prop, key) => {
          return (
            <React.Fragment key={key}>
              <Spinner color={prop} type={type}></Spinner>{" "}
              <span className="sr-only">Loading...</span>
            </React.Fragment>
          );
        })}
      </Col>
    </>
  );
};

function Spinners() {
  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-2 mt-5">Spinners</h3>
      <Row>
        <SpinnersBase type="border" />
        <SpinnersBase type="grow" />
      </Row>
    </>
  );
}

export default Spinners;
