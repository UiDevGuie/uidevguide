/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Pricing() {
  return (
    <>
      <div className="section section-pricing" id="sectionBuy">
        <Container>
          <Row className="our-clients">
            <Col lg="3" md="6" xs="6">
              <img
                alt="..."
                className="w-50"
                src={require("assets/img/presentation-page/harvard.jpg")}
              ></img>
            </Col>
            <Col lg="3" md="6" xs="6">
              <img
                alt="..."
                className="w-50"
                src={require("assets/img/presentation-page/microsoft.jpg")}
              ></img>
            </Col>
            <Col lg="3" md="6" xs="6">
              <img
                alt="..."
                className="w-50"
                src={require("assets/img/presentation-page/vodafone.jpg")}
              ></img>
            </Col>
            <Col lg="3" md="6" xs="6">
              <img
                alt="..."
                className="w-50"
                src={require("assets/img/presentation-page/stanford.jpg")}
              ></img>
            </Col>
          </Row>
          <Row className="mt-5" id="pricing">
            <Col className="mx-auto text-center mt-5" md="8">
              <h2 className="title">
                Ready to grab{" "}
                <span className="text-primary">Argon Design System PRO</span>?
              </h2>
            </Col>
            <Col className="mx-auto" lg="8" md="12">
              <p className="description mb-5 text-center">
                You have 6 months of <b>Free Unlimited Updates</b> and 6 months
                of <b>Premium Support</b> on each package. You also have{" "}
                <b>24 hours</b> to request a refund if you're not happy with
                your purchase. <br></br>
                Read more about{" "}
                <b>
                  <a
                    href="https://www.creative-tim.com/license?ref=adspr-pricing-presentation"
                    target="_blank"
                  >
                    licenses here
                  </a>
                </b>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pricing;
