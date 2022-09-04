import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Feature6() {
  return (
    <>
      <div className="section features-6">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-html5 text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">For Beginner</h5>
                  <p>
                  Find the beginners Guide and roadmap for becoming a frontend 
                  developer/ Full stack Developer. If you are non- technical 
                  background then this would be for you only to enter in IT fields
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-app text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">For JobSeekers</h5>
                  <p>
                  Crack Interview for MNC Companies,
                  We provide our Interview Question and Answer bundle solved of Big MNC Companies for you to crack Interviews.
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
              
            </Col>
            <Col className="mx-md-auto" lg="6" xs="10">
              <img
                alt="..."
                className="ml-lg-5"
                src={require("assets/img/ill/ill.png")}
                width="100%"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature6;
