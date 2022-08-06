import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function FullBackgroundCard3() {
  return (
    <>
      <Card className="card-blog card-background" data-animation={true}>
        <div
          className="full-background"
          style={{
            backgroundImage:
              "url(" + require("assets/img/theme/kit-suman.jpg") + ")",
          }}
        ></div>
        <CardBody>
          <div className="content-bottom">
            <h6 className="card-category text-white">Sales Leads</h6>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <CardTitle tag="h5">Configure Blockchain Technology</CardTitle>
            </a>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default FullBackgroundCard3;
