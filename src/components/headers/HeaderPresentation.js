import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

// Core Components

function HeaderPresentation() {
  return (
    <>
      <div className="section section-hero section-shaped">
        <div className="page-header">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/presentation_bg.png") + ")",
            }}
          ></div>
          <Container
            className="shape-container d-flex align-items-center py-lg"
            fluid
          >
            <div className="col px-0">
              <Row>
                <Col className="ml-5" lg="4">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "200px" }}
                  ></img>{" "}
                  <Badge color="info">PRO</Badge>
                  <p className="lead">
                    Start the Development with this<br></br>
                    <b>Badass Bootstrap 4 Design System.</b>
                  </p>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-pro-react?ref=adspr-header-presentation"
                    >
                      <span className="btn-inner--icon">
                        <i className="fas fa-shopping-cart"></i>
                      </span>
                      <span className="btn-inner--text">Purchase</span>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <small className="font-weight-bold mb-0 mr-2">
                      *proudly coded by
                    </small>
                    <img
                      alt="..."
                      src={require("assets/img/brand/creativetim-black-slim.png")}
                      style={{ height: "28px" }}
                    ></img>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeaderPresentation;
