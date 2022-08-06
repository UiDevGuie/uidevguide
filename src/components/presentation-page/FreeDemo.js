import React from "react";
import GitHubButton from "react-github-button";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function FreeDemo() {
  return (
    <>
      <section className="section-free-demo bg-secondary skew-separator">
        <Container>
          <Row>
            <Col lg="7" md="12">
              <div className="section-description" id="free-demo-github-button">
                <h3 className="display-3">Free Demo</h3>
                <p className="lead mb-4">
                  Do you want to test and see the benefits of this Design System
                  before purchasing it? You can give the demo version a try. It
                  features enough basic components for you to get a feel of the
                  design and also test the quality of the code. Get it free on
                  GitHub!
                </p>
                <div className="github-buttons">
                  <Button
                    className="btn-round"
                    color="primary"
                    href="https://github.com/creativetimofficial/argon-design-system-react"
                    target="_blank"
                  >
                    View Demo on Github
                  </Button>
                  <div className="github-button">
                    <GitHubButton
                      type="stargazers"
                      size="large"
                      namespace="creativetimofficial"
                      repo="argon-design-system-react"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="5" md="12">
              <div className="github-background-container">
                <i className="fab fa-github"></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="pt-5" lg="4" md="6">
              <Card className="card-pricing card-background">
                <CardBody>
                  <CardTitle className="text-primary text-left ml-2" tag="h2">
                    Free Demo
                  </CardTitle>
                  <ul>
                    <li className="text-left">
                      <strong>70</strong> Components
                    </li>
                    <li className="text-left">
                      <strong>3</strong> Example Pages
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="danger">
                        <i className="fas fa-times text-white"></i>
                      </Badge>{" "}
                      Uncoventional cards
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="danger">
                        <i className="fas fa-times text-white"></i>
                      </Badge>{" "}
                      Sections
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="danger">
                        <i className="fas fa-times text-white"></i>
                      </Badge>{" "}
                      Photoshop for Prototype
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="danger">
                        <i className="fas fa-times text-white"></i>
                      </Badge>{" "}
                      Premium Support
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col className="pt-5" lg="4" md="6">
              <Card className="card-pricing card-background">
                <CardBody>
                  <CardTitle className="text-primary text-left ml-2" tag="h2">
                    PRO Version
                  </CardTitle>
                  <ul>
                    <li className="text-left">
                      <strong>1100+</strong> Components
                    </li>
                    <li className="text-left">
                      <strong>17</strong> Example Pages
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="success">
                        <i className="ni ni-check-bold text-white"></i>
                      </Badge>{" "}
                      Uncoventional cards
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="success">
                        <i className="ni ni-check-bold text-white"></i>
                      </Badge>{" "}
                      Sections
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="success">
                        <i className="ni ni-check-bold text-white"></i>
                      </Badge>{" "}
                      Photoshop for Prototype
                    </li>
                    <li className="text-left">
                      <Badge className="badge-circle" color="success">
                        <i className="ni ni-check-bold text-white"></i>
                      </Badge>{" "}
                      Premium Support
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default FreeDemo;
