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
  const openLinkInNewTab = ( url ) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if ( newTab ) newTab.opener = null;
  }
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <Header4 />
          <Container className="text-center">
              <Row>
                <Col className="mx-auto" lg="7">
                  
                  <Button
                    className="btn-icon mt-3 mb-sm-0"
                    color="warning"
                onClick={ () => openLinkInNewTab('https://rzp.io/l/zLegYVRJJN')}

                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-button-play"></i>
                    </span>
                    <span className="btn-inner--text">
                   Claim your Early bird offer now
                    </span>
                  </Button>
                 
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
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
