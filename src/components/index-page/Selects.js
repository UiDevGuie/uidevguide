import React from "react";
// JavaScript library for creating Dropdown Selects
import Choices from "choices.js";
// reactstrap components
import { Form, Input, Row, Col } from "reactstrap";

// Core Components

function Selects() {
  React.useEffect(() => {
    new Choices("#choices-single-default", {
      searchEnabled: false,
    });
    new Choices("#choices-multiple-default", {
      searchEnabled: true,
      delimiter: ",",
      editItems: true,
      removeItemButton: true,
    });
  }, []);
  return (
    <>
      <Col md="6">
        <h3 className="h4 text-success font-weight-bold mb-4">
          Customizable Select
        </h3>
        <Row>
          <Col md="6">
            <div className="mb-3">
              <label
                className="text-uppercase font-weight-bold"
                htmlFor="choices-single-default"
              >
                Single Option
              </label>
            </div>
            <Form>
              <Input
                data-trigger=""
                id="choices-single-default"
                name="choices-single-default"
                type="select"
              >
                <option placeholder="true">Single Option</option>
                <option defaultValue="2">Foobar</option>
                <option defaultValue="3">Is great</option>
                <option defaultValue="4">Pick one</option>
              </Input>
            </Form>
          </Col>
          <Col md="6">
            <div className="mb-3">
              <label
                className="text-uppercase font-weight-bold"
                htmlFor="choices-multiple-default"
              >
                Multiple Options
              </label>
            </div>
            <Form>
              <Input
                data-trigger=""
                id="choices-multiple-default"
                multiple="multiple"
                name="choices-multiple-default"
                type="select"
              >
                <option placeholder="true">Multiple Options</option>
                <option defaultValue="2">Paris</option>
                <option defaultValue="3">Bucharest</option>
                <option defaultValue="4">Rome</option>
                <option defaultValue="5">New York</option>
                <option defaultValue="6">Miami</option>
                <option defaultValue="7">Los Santos</option>
                <option defaultValue="8">Sydney</option>
                <option defaultValue="9">Piatra Neamt</option>
              </Input>
            </Form>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Selects;
