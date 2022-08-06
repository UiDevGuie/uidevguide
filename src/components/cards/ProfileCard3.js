import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function ProfileCard3() {
  return (
    <>
      <Card className="card-profile" data-image="img-raised">
        <div className="card-header-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img"
              src={require("assets/img/faces/alejandro-escamilla.jpg")}
            ></img>
          </a>
          <CardTitle className="text-white" tag="div">
            Austin Johnson
          </CardTitle>
        </div>
        <CardBody>
          <h6 className="card-category text-info text-center">
            Project Manager
          </h6>
          <p className="card-description">
            Don't be scared of the truth because we need to restart the human
            foundation in truth And I love you...
          </p>
        </CardBody>
        <CardFooter className="text-center">
          <Button
            className="btn-icon-only btn-simple btn-default"
            color="instagram"
            type="button"
          >
            <span className="btn-inner--icon">
              <i className="fab fa-instagram"></i>
            </span>
          </Button>
          <Button
            className="btn-icon-only btn-simple"
            color="twitter"
            type="button"
          >
            <span className="btn-inner--icon">
              <i className="fab fa-twitter"></i>
            </span>
          </Button>
          <Button
            className="btn-icon-only btn-simple"
            color="dribbble"
            type="button"
          >
            <span className="btn-inner--icon">
              <i className="fab fa-dribbble"></i>
            </span>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProfileCard3;
