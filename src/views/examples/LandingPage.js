import React from "react";
import {Link} from 'react-router-dom';

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import Header4 from "components/headers/Header4.js";
import Feature6 from "components/features/Feature6.js";
import Blogs2 from "components/blogs/Blogs2.js";
import Pricing5 from "components/pricings/Pricing5.js";

import {  Container, Row, Col,Button ,NavLink} from "reactstrap";
function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <Header4 />
          <Container className="text-center">
              <Row>
                <Col className="mx-auto" lg="7">
                   <Link to="/checkout-page">
                  <Button
                    className="btn-icon mt-3 mb-sm-0"
                    color="warning"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-button-play"></i>
                    </span>
                    <span className="btn-inner--text">
                   Claim your Early bird offer now
                    </span>
                  </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
        <Blogs2 />
        <Container className="text-center">
              <Row>
                <Col className="mx-auto" lg="7">
                   <Link to="/checkout-page">
                  <Button
                    className="btn-icon mt-3 mb-sm-0"
                    color="warning"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-button-play"></i>
                    </span>
                    <span className="btn-inner--text">
                   Claim your Early bird offer now
                    </span>
                  </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
        <Feature6 />
        {/* <Pricing5 /> */}
     
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
