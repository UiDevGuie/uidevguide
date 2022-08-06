import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function ContactUs3() {
  return (
    <>
      <div className="contactus-3">
        <div className="page-header">
          <img
            alt="..."
            className="bg-image"
            src={require("assets/img/ill/bg_contactus3.svg")}
          ></img>
        </div>
        <Container className="pt-5">
          <Row>
            <Col className="text-center my-5" md="12">
              <h1 className="display-1 mt-3">Got a question?</h1>
              <h3 className="lead">
                We'd like to talk more about what you need
              </h3>
              <Button className="btn-icon mt-3" color="primary" type="button">
                <span className="btn-inner--icon">
                  <i className="ni ni-chat-round"></i>
                </span>
                <span className="btn-inner--text">Chat with us</span>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" xs="6">
              <div className="info info-hover">
                <div className="icon icon-shape icon-shape-primary icon-lg shadow rounded-circle text-primary">
                  <i className="ni ni-square-pin"></i>
                </div>
                <h4 className="info-title">Address</h4>
                <p className="description px-0">12124 First Street, nr 54</p>
              </div>
            </Col>
            <Col lg="3" md="6" xs="6">
              <div className="info info-hover">
                <div className="icon icon-shape icon-shape-primary icon-lg shadow rounded-circle text-primary">
                  <i className="ni ni-email-83"></i>
                </div>
                <h4 className="info-title">Email</h4>
                <p className="description px-0">hello@email.com</p>
              </div>
            </Col>
            <Col lg="3" md="6" xs="6">
              <div className="info info-hover">
                <div className="icon icon-shape icon-shape-primary icon-lg shadow rounded-circle text-primary">
                  <i className="ni ni-mobile-button"></i>
                </div>
                <h4 className="info-title">Phone</h4>
                <p className="description px-0">+1(424) 535 3523</p>
              </div>
            </Col>
            <Col lg="3" md="6" xs="6">
              <div className="info info-hover">
                <div className="icon icon-shape icon-shape-primary icon-lg shadow rounded-circle text-primary">
                  <i className="ni ni-circle-08"></i>
                </div>
                <h4 className="info-title">Contact</h4>
                <p className="description px-0">Andrew Samian</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs3;
