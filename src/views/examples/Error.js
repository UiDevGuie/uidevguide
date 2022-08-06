import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";

function Error() {
  React.useEffect(() => {
    document.body.classList.add("error-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-page");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
        <div className="page-header error-page">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/ill/404.svg") + ")",
            }}
          ></div>
          <Container>
            <Row>
              <Col className="text-center" md="12">
                <h1 className="title">404</h1>
                <p className="lead">Page not found :(</p>
                <h4 className="description text-default">
                  Ooooups! Looks like you got lost.
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Error;
