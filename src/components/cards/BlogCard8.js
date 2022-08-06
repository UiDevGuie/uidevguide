import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function BlogCard8() {
  return (
    <>
      <Card className="card-blog" data-background="pattern">
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <img
            alt="..."
            className="img pattern rounded"
            src={require("assets/img/ill/p8.svg")}
          ></img>
        </a>
        <CardBody>
          <h6 className="card-category text-danger">
            <i className="ni ni-badge"></i>
            News
          </h6>
          <CardTitle tag="h5">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              Focus on Your Employees
            </a>
          </CardTitle>
          <p className="card-description">
            Don't be scared of the truth because we need to restart the human
            foundation in truth And I love you like Kanye
          </p>
        </CardBody>
        <CardFooter>
          <div className="author">
            <img
              alt="..."
              className="avatar img-raised"
              src={require("assets/img/faces/team-3.jpg")}
            ></img>
            <span>Dylan Wyatt</span>
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

export default BlogCard8;
