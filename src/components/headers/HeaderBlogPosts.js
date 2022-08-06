import React from "react";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

// Core Components

function HeaderBlogPosts() {
  return (
    <>
      <div className="page-header page-header-small header-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/pages/nicolas-prieto.jpg") + ")",
          }}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="mx-auto text-center" md="6">
              <h1 className="title text-white">
                A Place for Entrepreneurs to Share and Discover New Stories
              </h1>
              <Button
                className="btn-round btn-icon-only"
                color="warning"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-round btn-icon-only"
                color="warning"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-instagram"></i>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default HeaderBlogPosts;
