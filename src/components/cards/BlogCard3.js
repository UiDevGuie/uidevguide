import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function BlogCard3() {
  return (
    <>
      <Card className="card-blog" data-header="pattern">
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <img
            alt="..."
            className="img pattern rounded"
            src={require("assets/img/ill/p2.svg")}
          ></img>
        </a>
        <CardBody>
          <h6 className="card-category text-danger">
            <i className="ni ni-badge"></i>
            Features
          </h6>
          <CardTitle tag="h5">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              FiftyThree Files For Paper
            </a>
          </CardTitle>
          <p className="card-description">
            Yesterday, as Facebook launched its news reader app Paper,
            design-focused startup FiftyThree called out Facebook...
          </p>
        </CardBody>
        <CardFooter>
          <div className="author">
            <img
              alt="..."
              className="avatar img-raised"
              src={require("assets/img/faces/team-3.jpg")}
            ></img>
            <span>Johana Doe</span>
          </div>
          <div className="stats stats-right">
            <i className="ni ni-favourite-28"></i>
            10.4K · <i className="ni ni-archive-2"></i>
            425
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default BlogCard3;
