import React from "react";

// reactstrap components
import { Container, Col } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import ResetCard1 from "components/cards/ResetCard1.js";

function ResetPage() {
  React.useEffect(() => {
    document.body.classList.add("reset-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("reset-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <div className="page-header bg-default">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/reset.svg") + ")",
            }}
          ></div>
          <Container>
            <Col className="mx-auto" lg="5" md="8">
              <ResetCard1 />
            </Col>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default ResetPage;
