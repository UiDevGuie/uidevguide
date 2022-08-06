import React from "react";

// reactstrap components
import { FormGroup, Form, Input, Col } from "reactstrap";

// Core Components

function Textarea() {
  return (
    <>
      <Col md="6">
        <Form>
          <FormGroup>
            <div className="mb-3 mt-5">
              <small className="text-uppercase font-weight-bold">
                Textarea
              </small>
            </div>
            <Input
              id="exampleFormControlTextarea1"
              placeholder="You can write your text here..."
              rows="3"
              spellCheck={false}
              type="textarea"
            ></Input>
          </FormGroup>
        </Form>
      </Col>
    </>
  );
}

export default Textarea;
