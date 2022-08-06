import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
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
      <>
        <div className="info text-left bg-danger shadow-lg">
          <div className="icon icon-shape bg-white text-danger shadow rounded-circle mb-4">
            <i className="fa fa-quote-right"></i>
          </div>
          <p className="description text-white">
            It really matters and then like it really doesn’t matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn’t matter. Because it's about
            motivating the doers. Because I’m here to follow my dreams and
            inspire other people to follow their dreams.
          </p>
          <div className="author">
            <img
              alt="..."
              className="avatar img-raised"
              src={require("assets/img/faces/team-5.jpg")}
            ></img>
            <span>Mike John</span>
          </div>
        </div>
        <Card className="card-blog card-background" data-animation={true}>
          <div
            className="full-background"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/austin.jpg") + ")",
            }}
          ></div>
          <CardBody>
            <div className="content-bottom ml-auto">
              <Button
                className="btn-round btn-simple btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="ni ni-book-bookmark"></i>
                Read more
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <>
        <div className="info text-left bg-info shadow-lg">
          <div className="icon icon-shape bg-white text-info shadow rounded-circle mb-4">
            <i className="fa fa-quote-right"></i>
          </div>
          <p className="description text-white">
            Take up one idea. Make that one idea your life - think of it, dream
            of it, live on that idea. Let the brain, muscles, nerves, every part
            of your body, be full of that idea, and just leave every other idea
            alone. This is the way to success. A single rose can be my garden...
            a single friend, my world.
          </p>
          <div className="author">
            <img
              alt="..."
              className="avatar img-raised"
              src={require("assets/img/faces/team-3.jpg")}
            ></img>
            <span>Andrew Lino</span>
          </div>
        </div>
        <Card className="card-blog card-background" data-animation={true}>
          <div
            className="full-background"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/unsplashs.jpg") + ")",
            }}
          ></div>
          <CardBody>
            <div className="content-bottom ml-auto">
              <Button
                className="btn-round btn-simple btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="ni ni-book-bookmark"></i>
                Read more
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
];

function Testimonials2() {
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
      <div className="testimonials-2">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title">What Clients Say</h2>
            </Col>
          </Row>
          <Row>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              className="carousel-testimonials"
              id="carouselFade"
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
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Testimonials2;
