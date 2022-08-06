import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function BlogCard2() {
  return (
    <>
      <Card className="card-blog bg-primary" data-image="path">
        <div className="card-image">
          <img
            alt="..."
            className="img rounded"
            src={require("assets/img/ill/p22.png")}
          ></img>
        </div>
        <CardBody className="pt-0">
          <h6 className="category text-white">
            <i className="ni ni-atom"></i>
            Focus
          </h6>
          <CardTitle tag="h5">
            <a
              className="text-white"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Stay focused
            </a>
          </CardTitle>
          <p className="card-description text-white">
            Our brains are finely attuned to distraction, so today's digital
            environment makes it especially hard to focus...
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard2;
