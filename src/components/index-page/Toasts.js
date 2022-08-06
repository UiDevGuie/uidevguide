import React from "react";

// reactstrap components
import { Row, Col, Toast, ToastBody } from "reactstrap";

// Core Components

const colors = [
  "",
  "default",
  "primary",
  "secondary",
  "info",
  "success",
  "danger",
  "warning",
];

function Toasts() {
  return (
    <>
      <p className="text-uppercase font-weight-bold mt-5 mb-3">Toasts</p>
      <Row className="justify-content-center">
        {colors.map((prop, key) => {
          return (
            <Col lg="5" md="6" className="mb-3" key={key}>
              <Toast className={"bg-" + prop}>
                <div
                  className={
                    "toast-header" +
                    (prop !== "" && prop !== "secondary" ? " text-white" : "")
                  }
                >
                  <img
                    alt="..."
                    className="rounded mr-2"
                    src={require("assets/img/tim.png")}
                  ></img>
                  <strong className="mr-auto">Creative Tim</strong>{" "}
                  <small>11 mins ago</small>
                  <button
                    type="button"
                    className="ml-2 close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <ToastBody
                  className={
                    prop !== "" && prop !== "secondary" ? "text-white" : ""
                  }
                >
                  Hello, world! This is a {prop} toast message.
                </ToastBody>
              </Toast>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Toasts;
