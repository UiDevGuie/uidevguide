import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function ProjectsSection() {
  return (
    <>
      <div className="project-2 my-5">
        <Container>
          <Row>
            <Col className="mx-auto text-center my-5" lg="8">
              <h3 className="display-3">Some of Our Awesome Products</h3>
              <p className="lead">
                The time is now for it to be okay to be great. People in this
                world shun people for being great.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mx-auto">
                    <i className="ni ni-favourite-28"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Slack bot
                  </CardTitle>
                  <p className="card-description">
                    If everything I did failed - which it doesn't, it actually
                    succeeds - just the fact that I'm willing to fail is an
                    inspiration. People are so scared to lose that they don't
                    even try.
                  </p>
                  <CardFooter>
                    <Button className="text-primary" color="link" type="button">
                      <i className="ni ni-glasses-2"></i>
                      Check more
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mx-auto">
                    <i className="ni ni-books"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Looking great
                  </CardTitle>
                  <p className="card-description">
                    You have the opportunity to play this game of life you need
                    to appreciate every moment. A lot of people don’t appreciate
                    the moment until it’s motivating the doers.
                  </p>
                  <CardFooter>
                    <Button className="text-success" color="link" type="button">
                      <i className="ni ni-key-25"></i>
                      Find a opportunity
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mx-auto">
                    <i className="ni ni-trophy"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Developer First
                  </CardTitle>
                  <p className="card-description">
                    For standing out. But the time is now to be okay to be the
                    greatest you. Would you believe in what you believe in, if
                    you were the only one who believed it?
                  </p>
                  <CardFooter>
                    <Button className="text-warning" color="link" type="button">
                      <i className="ni ni-notification-70"></i>
                      Check more
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-secondary shadow rounded-circle mx-auto">
                    <i className="ni ni-favourite-28"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Prepare launch
                  </CardTitle>
                  <p className="card-description">
                    Society has put up so many boundaries, so many limitations
                    on what’s right and wrong that it’s almost impossible to get
                    a pure thought out. It’s like a little kid, a little boy.
                  </p>
                  <CardFooter>
                    <Button
                      className="text-secondary"
                      color="link"
                      type="button"
                    >
                      <i className="ni ni-glasses-2"></i>
                      Check out now
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mx-auto">
                    <i className="ni ni-books"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Premium support
                  </CardTitle>
                  <p className="card-description">
                    Pink is obviously a better color. Everyone’s born confident,
                    and everything’s taken away from you matters is the people
                    who are sparked by it follow their dreams, too.
                  </p>
                  <CardFooter>
                    <Button className="text-danger" color="link" type="button">
                      <i className="ni ni-key-25"></i>
                      Find a opportunity
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mx-auto">
                    <i className="ni ni-trophy"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Design tools
                  </CardTitle>
                  <p className="card-description">
                    Constantly growing. We’re constantly making mistakes. We’re
                    constantly trying to express ourselves and actualize our
                    dreams the position that we want to be.
                  </p>
                  <CardFooter>
                    <Button className="text-info" color="link" type="button">
                      <i className="ni ni-notification-70"></i>
                      Check more
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectsSection;
