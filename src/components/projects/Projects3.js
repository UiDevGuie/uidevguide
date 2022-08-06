import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Projects3() {
  return (
    <>
      <div className="projects-3">
        <Container>
          <Row>
            <Col className="mr-auto ml-auto text-center" md="8">
              <h6 className="category text-muted">Our work</h6>
              <h2 className="title mb-5">Some of Our Awesome Projects - 3</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card
                className="card-background"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/theme/masha-rostovskaya.jpg") +
                    ")",
                }}
              >
                <CardBody className="text-left">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                    <i className="ni ni-atom text-warning"></i>
                  </div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h2">Project Alpha</CardTitle>
                  </a>
                  <h6 className="desc text-white opacity-8">Java App</h6>
                  <Button
                    color="warning"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Watch Later
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                className="card-background"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/theme/ali-pazani.jpg") + ")",
                }}
              >
                <CardBody className="text-center">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                    <i className="ni ni-controller text-danger"></i>
                  </div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h2">Project Beta</CardTitle>
                  </a>
                  <h6 className="desc text-white opacity-8">College project</h6>
                  <Button
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Watch Later
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                className="card-background"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/theme/willy-dade.jpg") + ")",
                }}
              >
                <CardBody className="text-right">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                    <i className="ni ni-html5 text-success"></i>
                  </div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h2">Project Gama</CardTitle>
                  </a>
                  <h6 className="desc text-white opacity-8">HTML code</h6>
                  <Button
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Watch Later
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects3;
