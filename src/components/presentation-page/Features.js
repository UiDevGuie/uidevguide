import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Features() {
  return (
    <>
      <section className="section-features bg-secondary">
        <Container fluid>
          <Row>
            <Col className="pt-5" lg="6" md="12">
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-warning rounded-circle text-white">
                  <i className="ni ni-money-coins text-warning"></i>
                </div>
                <div className="description pl-4 pt-2">
                  <h5 className="title">Save Time &amp; Money</h5>
                  <p>
                    Creating your design from scratch with dedicated designers
                    can be very expensive.Using Argon Design System PRO you
                    don't have to worry about customising the basic Bootstrap 4
                    design or its components.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-bold text-info"></i>
                </div>
                <div className="description pl-4 pt-2">
                  <h5 className="title">Bootstrap 4 &amp; Flexbox</h5>
                  <p>
                    It is built over Bootstrap 4, it's fully responsive and has
                    all the benefits of the flexbox for the layout, grid system
                    and components. This is a huge advantage when you work with
                    columns.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-danger rounded-circle text-white">
                  <i className="ni ni-paper-diploma text-danger"></i>
                </div>
                <div className="description pl-4 pt-2">
                  <h5 className="title">Fast Prototype</h5>
                  <p>
                    Using Argon Design System PRO you can create hundreds of
                    components combinations within seconds and present them to
                    your client. You just need to change some classes and
                    colors.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/presentation-page/ipad.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Features;
