import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function HeaderBlogPost() {
  return (
    <>
      <div className="page-header header-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/photo-1.jpg") + ")",
          }}
        ></div>
        <Container>
          <Row>
            <Col className="mx-auto text-center" lg="10">
              <h2 className="display-2 text-white">Check our latest post!</h2>
            </Col>
          </Row>
          <Row>
            <div className="floating-box bg-default">
              <div className="box text-center">
                <div className="icon icon-shape bg-primary icon-xl rounded-circle text-white">
                  <i className="ni ni-spaceship"></i>
                </div>
              </div>
              <blockquote className="blockquote text-center mt-4">
                <p className="mb-0 text-white">posted 13 Sept 2019</p>
                <footer className="blockquote-footer text-white">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <h2 className="lead text-white p-5">
                As a result of growing greenhouse gas emissions, climate models
                predict that our planet will get significantly warmer, that
                ecosystems will be changed or destroyed, and that enormous human
                and economic costs will be incurred. These scenarios aren’t
                guaranteed, but avoiding them will be very hard. We’re trying to
                take small steps to mitigate our impact.
              </h2>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeaderBlogPost;
