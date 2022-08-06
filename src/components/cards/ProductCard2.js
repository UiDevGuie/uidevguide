import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function ProductCard2() {
  return (
    <>
      <Card className="card-product card-plain">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." src={require("assets/img/pages/bag.png")}></img>
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <CardTitle tag="h5">Tom Ford</CardTitle>
          </a>
          <CardFooter className="d-flex justify-content-between">
            <div className="price-container">
              <span className="price-old opcaity-8">€ 1179</span>
              <span className="price-new ml-1">€ 999</span>
            </div>
            <Button
              className="btn-icon-only btn-round pull-right"
              color="danger"
              data-placement="left"
              id="tooltip169173461"
              size="sm"
            >
              <i className="ni ni-favourite-28"></i>
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip169173461"
            >
              Add to wishlist
            </UncontrolledTooltip>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard2;
