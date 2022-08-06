import React from "react";

// reactstrap components
import { Button, Card, Row, Col } from "reactstrap";

// Core Components

function ProfileCard7() {
  return (
    <>
      <Card className="card-profile shadow mt--300">
        <div className="px-4">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                </a>
              </div>
            </Col>
            <Col
              className="order-lg-3 text-lg-right align-self-lg-center"
              lg="4"
            >
              <div className="card-profile-actions py-4 mt-lg-0">
                <Button
                  className="mr-4"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Connect
                </Button>
                <Button
                  className="float-right"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Message
                </Button>
              </div>
            </Col>
            <Col className="order-lg-1" lg="4">
              <div className="card-profile-stats d-flex justify-content-center">
                <div>
                  <span className="heading">22</span>
                  <span className="description">Friends</span>
                </div>
                <div>
                  <span className="heading">10</span>
                  <span className="description">Photos</span>
                </div>
                <div>
                  <span className="heading">89</span>
                  <span className="description">Comments</span>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <h3>
              Jessica Jones
              <span className="font-weight-light">, 27</span>
            </h3>
            <div className="h6 font-weight-300">
              <i className="ni location_pin mr-2"></i>
              Bucharest, Romania
            </div>
            <div className="h6 mt-4">
              <i className="ni business_briefcase-24 mr-2"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div>
              <i className="ni education_hat mr-2"></i>
              University of Computer Science
            </div>
          </div>
          <div className="mt-5 py-5 border-top text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <p>
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Show more
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProfileCard7;
