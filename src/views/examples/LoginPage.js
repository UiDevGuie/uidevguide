import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import LoginCard1 from "components/cards/LoginCard1.js";

function LoginPage() {
  React.useEffect(() => {
    document.body.classList.add("login-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="section-shaped my-0 skew-separator skew-mini">
        <div className="page-header page-header-small header-filter">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/unsplashs.jpg") + ")",
            }}
          ></div>
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col className="px-5" lg="6" md="8" xl="5">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-white">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <section className="upper">
        <Container>
          <Col className="mx-auto" lg="5" md="8">
            <LoginCard1 />
          </Col>
        </Container>
      </section>
      <DemoFooter />
    </>
  );
}

export default LoginPage;
