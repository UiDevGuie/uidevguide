import React from "react";

// reactstrap components
import { Card, CardBody } from "reactstrap";

// Core Components

function BlogCard7() {
  return (
    <>
      <Card className="card-blog bg-info">
        <img
          alt="..."
          className="img pattern rounded"
          src={require("assets/img/ill/p7.svg")}
        ></img>
        <CardBody>
          <h4 className="display-4 text-white">Here Be Dragons</h4>
          <p className="lead text-white mt-0">
            Our brains are finely attuned to distraction, so today's digital
            environment makes it especially hard to focus...
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard7;
