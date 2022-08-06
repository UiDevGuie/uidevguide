import React from "react";

// reactstrap components
import { Button, Card, CardHeader, CardBody } from "reactstrap";

// Core Components

function ProfileCard5() {
  return (
    <>
      <Card className="card-profile" data-background="cover">
        <img
          alt="..."
          className="img pattern pattern-top"
          src={require("assets/img/ill/linth3.svg")}
        ></img>
        <CardHeader>
          <div className="card-avatar">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                className="img img-raised rounded-circle"
                src={require("assets/img/faces/team-3.jpg")}
              ></img>
            </a>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="text-center">
            <h5 className="h5 mt-3">
              Johana Doe
              <span className="font-weight-light">, 37</span>
            </h5>
            <div className="font-weight-300">
              <i className="ni location_pin mr-2"></i>
              Chicago, USA
            </div>
          </div>
          <div className="card-profile-stats d-flex justify-content-center">
            <div>
              <span className="heading">23K</span>
              <span className="description">Followers</span>
            </div>
            <div>
              <span className="heading">47</span>
              <span className="description">Posts</span>
            </div>
          </div>
          <Button block color="success" size="lg" type="button">
            Like!
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileCard5;
