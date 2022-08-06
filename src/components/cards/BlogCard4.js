import React from "react";

// reactstrap components
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

// Core Components

function BlogCard4() {
  return (
    <>
      <Card className="text-white bg-default">
        <CardImg alt="..." src={require("assets/img/ill/inn.svg")}></CardImg>
        <CardImgOverlay className="d-flex align-items-center">
          <div className="content">
            <CardTitle className="h2 text-white mb-2">Card Title</CardTitle>
            <p className="card-description">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <CardText className="text-sm font-weight-bold">
              Last updated 3 mins ago
            </CardText>
          </div>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default BlogCard4;
