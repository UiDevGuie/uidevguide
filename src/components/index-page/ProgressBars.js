import React from "react";

// reactstrap components
import { Progress, Col } from "reactstrap";

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

function ProgressBars() {
  return (
    <>
      <Col md="6">
        <h3 className="h4 text-success font-weight-bold mb-4">Progress bars</h3>
        {colors.map((prop, key) => {
          return (
            <div className="progress-wrapper" key={key}>
              <div className="progress-info">
                <div className="progress-label">
                  <span>{prop}</span>
                </div>
                <div className="progress-percentage">
                  <span className={"text-" + prop}>60%</span>
                </div>
              </div>
              <Progress color={prop} max="100" value="60"></Progress>
            </div>
          );
        })}
      </Col>
    </>
  );
}

export default ProgressBars;
