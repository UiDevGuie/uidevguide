import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Info() {
  return (
    <>
      <section className="section-info">
        <Container>
          <Row>
            <Col lg="4" md="6">
              <div className="info text-left">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                  <i className="ni ni-user-run"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary pl-0">
                  Huge number of components
                </h6>
                <p className="description opacity-8">
                  Every element that you need in a product comes built in as a
                  component. All components fit perfectly with each other and
                  can take variations in colour.
                </p>
                <Link className="text-primary" to="/index">
                  More about us{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="info text-left" style={{ marginTop: "-50px" }}>
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                  <i className="ni ni-atom"></i>
                </div>
                <h6 className="info-title text-uppercase text-success pl-0">
                  Multi-Purpose Sections
                </h6>
                <p className="description opacity-8">
                  Putting together a page has never been easier than matching
                  together sections. From team presentation to pricing options,
                  you can easily customise and built your pages.
                </p>
                <Link className="text-primary" to="/sections">
                  Learn about our products{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="info text-left">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                  <i className="ni ni-istanbul"></i>
                </div>
                <h6 className="info-title text-uppercase text-warning pl-0">
                  Multiple Example Pages
                </h6>
                <p className="description opacity-8">
                  If you want to get inspiration or just show something directly
                  to your clients, you can jump start your development with our
                  pre-built example pages.
                </p>
                <a
                  className="text-primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Check our documentation{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Info;
