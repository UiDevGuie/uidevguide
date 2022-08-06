import React from "react";

// reactstrap components
import { Card, CardBody } from "reactstrap";

// Core Components

function BlogCard1() {
  return (
    <>
      <Card className="bg-gradient-danger">
        <CardBody className="pb-0">
          <h6 className="category-social text-white text-uppercase">
            <i className="fa fa-fire"></i> Focus
          </h6>
          <p className="lead text-white my-0">
            Our brains are finely attuned to distraction
          </p>
        </CardBody>
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <img
            alt="..."
            className="img pattern rounded"
            src={require("assets/img/ill/p51.svg")}
          ></img>
        </a>
      </Card>
    </>
  );
}

export default BlogCard1;
