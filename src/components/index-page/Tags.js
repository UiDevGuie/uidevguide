import React from "react";
// JavaScript library for creating Tags Inputs
import Choices from "choices.js";
// reactstrap components
import { FormGroup, Form, Col } from "reactstrap";

// Core Components

function Tags() {
  React.useEffect(() => {
    new Choices("#badges", {
      delimiter: ",",
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
      placeholder: true,
      placeholderValue: "+ Add",
    });
  }, []);
  return (
    <>
      <Col md="6">
        <Form>
          <FormGroup>
            <div className="mb-3 mt-5">
              <small className="text-uppercase font-weight-bold">Tags</small>
            </div>
            <input
              defaultValue="Amsterdam,Sydney, Rome, Singapore"
              id="badges"
              type="text"
            ></input>
          </FormGroup>
        </Form>
      </Col>
    </>
  );
}

export default Tags;
