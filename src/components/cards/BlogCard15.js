import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function BlogCard15() {
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
            <i className="ni ni-badge"></i> Fashion
          </h6>
          <CardTitle tag="h5">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              Wardrobe essentials
            </a>
          </CardTitle>
          <p className="card-description">
            Trends may come and go, but wardrobe essentials are here to stay.
            Basic pieces tend to be universal across.
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard15;
