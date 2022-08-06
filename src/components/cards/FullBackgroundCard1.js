import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function FullBackgroundCard1() {
  return (
    <>
      <Card className="card-blog card-background" data-animation="zooming">
        <div
          className="full-background"
          style={{
            backgroundImage:
              "url(" + require("assets/img/theme/josh-appel.jpg") + ")",
          }}
        ></div>
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <CardBody>
            <div className="content-bottom">
              <h6 className="card-category text-white opacity-8">
                New Challenges
              </h6>
              <CardTitle tag="h5">Touch on a trend</CardTitle>
            </div>
          </CardBody>
        </a>
      </Card>
    </>
  );
}

export default FullBackgroundCard1;
