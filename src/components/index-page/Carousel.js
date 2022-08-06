import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

// Core Components
const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "Slide 1",
    caption: "",
    key: "key-1",
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "Slide 2",
    caption: "",
    key: "key-2",
  },
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "Slide 3",
    caption: "",
    key: "key-3",
  },
];

function CarouselSection() {
  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/1.svg") + ")",
        }}
      >
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded overflow-hidden transform-perspective-left">
                <UncontrolledCarousel items={items} />
              </div>
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="font-weight-light">Bootstrap carousel</h1>
              <p className="lead mt-4">
                Argon Design System PRO React comes with 18 pre-built pages to
                help you get started faster. You can change the text and images
                and you're good to go.
              </p>
              <Button
                className="btn-white mt-4"
                color="default"
                href="https://www.creative-tim.com/learning-lab/reactstrap/carousel/argon-design-system"
              >
                See all components
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
