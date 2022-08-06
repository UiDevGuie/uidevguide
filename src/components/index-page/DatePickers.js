import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// Core Components
import DateTime from "components/date-pickers/DateTime.js";
import OnlyDate from "components/date-pickers/OnlyDate.js";
import OnlyTime from "components/date-pickers/OnlyTime.js";
import Range from "components/date-pickers/Range.js";

function DatePickers() {
  return (
    <>
      <h3
        className="h4 text-success font-weight-bold mt-md mb-4"
        id="react-datetime-index"
      >
        Datepicker
      </h3>
      <Row>
        <Col md="4">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Date & Time
          </small>
          <DateTime />
        </Col>
        <Col md="4">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Only Date
          </small>
          <OnlyDate />
        </Col>
        <Col md="4">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Only Time
          </small>
          <OnlyTime />
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Range
          </small>
        </Col>
      </Row>
      <Range />
    </>
  );
}

export default DatePickers;
