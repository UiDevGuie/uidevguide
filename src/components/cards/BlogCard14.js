import React from "react";

// reactstrap components
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

// Core Components

function BlogCard14() {
  return (
    <>
      <Card>
        <CardImg
          alt="..."
          src={require("assets/img/ill/linth3.svg")}
          top
        ></CardImg>
        <CardBody>
          <h6 className="card-category text-danger">
            <i className="ni ni-badge"></i> Fashion
          </h6>
          <CardTitle className="text-success" tag="h5">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              Wardrobe essentials
            </a>
          </CardTitle>
          <CardText className="mt-4">
            Argon is a great free UI package based on Bootstrap 4 that includes
            the most important components and features.
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard14;
