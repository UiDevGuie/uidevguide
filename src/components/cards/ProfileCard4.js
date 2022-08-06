import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function ProfileCard4() {
  return (
    <>
      <Card className="card-profile" data-image="img-rounded">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img"
              src={require("assets/img/faces/team-1.jpg")}
            ></img>
          </a>
        </div>
        <CardBody>
          <h6 className="card-category text-gray">Project Manager</h6>
          <CardTitle tag="h4">Austin Johnson</CardTitle>
          <p className="card-description">
            Don't be scared of the truth because we need to restart the human
            foundation in truth And I love you...
          </p>
          <Button
            className="btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Follow
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileCard4;
