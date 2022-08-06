import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function BlogCard13() {
  return (
    <>
      <Card className="card-blog" data-header="pattern">
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <img
            alt="..."
            className="img pattern rounded"
            src={require("assets/img/ill/presentation_bg.png")}
          ></img>
        </a>
        <CardBody>
          <h6 className="card-category text-danger">
            <i className="ni ni-badge"></i> Wearing
          </h6>
          <CardTitle tag="h5">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              Choose the best products
            </a>
          </CardTitle>
          <p className="card-description">
            Yesterday, as Facebook launched its news reader app Paper,
            design-focused startup FiftyThree called out Facebook...
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard13;
