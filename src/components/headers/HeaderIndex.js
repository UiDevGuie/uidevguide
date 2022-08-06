import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

// Core Components

function HeaderIndex() {
  return (
    <>
      <div className="section section-hero section-shaped">
        <div className="page-header">
          <img
            alt="..."
            className="bg-image"
            src={require("assets/img/ill/index_bg.svg")}
          ></img>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "200px" }}
                  ></img>
                  <Badge color="info">PRO</Badge>
                  <p className="lead">
                    <b className="display-3">All components</b>
                    <br></br>A beautiful Premium Design System for Bootstrap 4.
                  </p>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="info"
                      href="https://www.creative-tim.com/product/argon-design-system-pro-react?ref=adspr-header-index"
                    >
                      <span className="btn-inner--icon">
                        <i className="fas fa-shopping-cart"></i>
                      </span>
                      <span className="btn-inner--text">Purchase</span>
                    </Button>
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/learning-lab/reactstrap/overview/argon-design-system"
                    >
                      <span className="btn-inner--icon">
                        <i className="fas fa-file"></i>
                      </span>
                      <span className="btn-inner--text">Docs</span>
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

export default HeaderIndex;
