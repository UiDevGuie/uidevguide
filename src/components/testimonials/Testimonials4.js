import React from "react";

// reactstrap components
import {
  Button,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

// Core Components
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col className=" ml-auto" md="5">
            <CardTitle tag="h3">Sarah Smith</CardTitle>
            <h3 className=" text-primary">• • •</h3>
            <h4 className=" lead">
              Take up one idea. Make that one idea your life - think of it,
              dream of it, live on that idea. Let the brain, muscles, nerves,
              every part of your body, be full of that idea, and just leave
              every other idea alone. This is the way to success. A single rose
              can be my garden... a single friend, my world.
            </h4>
            <Button
              color="primary"
              className="mt-3"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button>
          </Col>
          <Col className=" p-5 ml-auto" md="5">
            <div className=" p-3">
              <img
                alt="..."
                className=" img-fluid rounded shadow transform-perspective-right"
                src={require("assets/img/faces/fezbot.jpg")}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className=" ml-auto" md="5">
            <CardTitle tag="h3">Isaac Hunter</CardTitle>
            <h3 className=" text-info">• • •</h3>
            <h4 className=" lead">
              Take up one idea. Make that one idea your life - think of it,
              dream of it, live on that idea. Let the brain, muscles, nerves,
              every part of your body, be full of that idea, and just leave
              every other idea alone. This is the way to success. A single rose
              can be my garden... a single friend, my world.
            </h4>
            <Button
              className=" mt-3"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button>
          </Col>
          <Col className=" p-5 ml-auto" md="5">
            <div className=" p-3">
              <img
                alt="..."
                className=" img-fluid rounded shadow transform-perspective-right"
                src={require("assets/img/faces/brooke-cagle.jpg")}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
];

function Testimonials4() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  return (
    <>
      <div className=" testimonials-1 bg-secondary py-5 skew-separator skew-top">
        <Container>
          <Row>
            <Col className=" mx-auto text-center" md="6">
              <h3 className=" display-3">What Clients Say</h3>
            </Col>
          </Row>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carousel-team"
            id="carousel-testimonials"
          >
            {items.map((item, key) => {
              return (
                <CarouselItem
                  onExiting={() => setAnimating(true)}
                  onExited={() => setAnimating(false)}
                  key={key}
                >
                  {item.content}
                </CarouselItem>
              );
            })}
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <i className="ni ni-bold-left"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <i className="ni ni-bold-right"></i>
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default Testimonials4;
