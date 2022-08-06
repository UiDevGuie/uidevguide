import React from "react";

// reactstrap components
import { Button, Card, CardHeader, CardBody, Row } from "reactstrap";

// Core Components

function ProfileCard2() {
  return (
    <>
      <Card className="card-profile">
        <CardHeader
          className="bg-info"
          style={{
            backgroundImage: "url(" + require("assets/img/ill/inn.svg") + ")",
          }}
        >
          <div className="card-avatar">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                className="img img-raised rounded-circle"
                src={require("assets/img/faces/team-4.jpg")}
              ></img>
            </a>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="d-flex justify-content-between">
            <Button
              className="mr-4 mt-3"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              size="sm"
            >
              Connect
            </Button>
            <Button
              className="float-right mt-3"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              size="sm"
            >
              Message
            </Button>
          </div>
          <Row>
            <div className="col">
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
            </div>
          </Row>
          <div className="text-center">
            <h5 className="h4">
              Daisy Paisley
              <span className="font-weight-light">, 28</span>
            </h5>
            <div className="font-weight-300">
              <i className="ni location_pin mr-2"></i>
              Bucharest, Romania
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileCard2;
