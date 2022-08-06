import React from "react";

// reactstrap components
import { UncontrolledAlert } from "reactstrap";

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

function Alerts() {
  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4 mt-5">Alerts</h3>
      {colors.map((prop, key) => {
        return (
          <UncontrolledAlert color={prop} key={key} fade={false}>
            <span className="alert-inner--icon">
              <i className="ni ni-bell-55"></i>
            </span>
            <span className="alert-inner--text">
              <strong className="text-capitalize">{prop}!</strong> This is a
              success alert—check it out!
            </span>
          </UncontrolledAlert>
        );
      })}
    </>
  );
}

export default Alerts;
