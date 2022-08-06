import React from "react";

// reactstrap components
import { Button, ButtonGroup, Media, Container, Row, Col } from "reactstrap";

function Blogs7() {
  return (
    <>
      <section className="blogs-7">
        <Container>
          <Row>
            <Col className="mx-auto" lg="10">
              <h3 className="display-3 mb-5">Latest Blogposts</h3>
              <div className="media-area">
                <div className="media-header">
                  <Row>
                    <Col className="d-flex justify-content-start" md="6">
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="shadow"
                          object
                          src={require("assets/img/faces/team-2.jpg")}
                        ></Media>
                      </div>
                      <div className="text">
                        <span className="name">Tom Hanks</span>
                        <div className="meta">Drawn on 23 Jan</div>
                      </div>
                    </Col>
                    <Col className="d-flex justify-content-end" md="6">
                      <ButtonGroup>
                        <Button
                          className="btn-icon-only"
                          color="secondary"
                          outline
                          size="sm"
                        >
                          <i className="ni ni-notification-70"></i>
                        </Button>
                        <Button
                          className="btn-icon-only"
                          color="secondary"
                          outline
                          size="sm"
                        >
                          <i className="ni ni-chat-round"></i>
                        </Button>
                        <Button
                          className="btn-icon-only"
                          color="secondary"
                          outline
                          size="sm"
                        >
                          <i className="ni ni-single-copy-04"></i>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                  <div className="image">
                    <img
                      alt="..."
                      src={require("assets/img/theme/wade.jpg")}
                    ></img>
                  </div>
                  <p className="description">
                    If you’ve ever wanted to train a machine learning model and
                    integrate it with IFTTT, you now can with a new offering
                    from MateLabs. MateVerse, a platform where novices can spin
                    out machine...If you’ve ever wanted to train a machine
                    learning model and integrate it with IFTTT, you now can with
                    a new offering from MateLabs. MateVerse, a platform where
                    novices can spin out machine...{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Read More
                    </a>
                  </p>
                  <p className="hashtag">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      #tothetop
                    </a>{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      #allthewayup
                    </a>{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      #goodvibesonly
                    </a>
                  </p>
                  <div className="actions mb-5">
                    <Button color="info" outline size="sm">
                      <i className="ni ni-like-2"></i>
                      Like
                    </Button>
                    <Button color="info" outline size="sm">
                      <i className="ni ni-curved-next"></i>
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs7;
