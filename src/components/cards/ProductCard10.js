import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function ProductCard10() {
  return (
    <>
      <Card className="card-product">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img rounded"
              src={require("assets/img/pages/shorts.png")}
            ></img>
          </a>
        </div>
        <CardBody>
          <h6 className="category text-warning">Popular</h6>
          <CardTitle tag="h4">
            <CardLink href="#pablo" onClick={(e) => e.preventDefault()}>
              Balmain
            </CardLink>
          </CardTitle>
          <div className="card-description opacity-8 mt-2">
            Balmain's mid-rise skinny jeans are cut with stretch to ensure they
            retain their second-skin fit but move comfortably.
          </div>
          <CardFooter className="d-flex justify-content-between">
            <div className="price-container">
              <span className="price">€459</span>
            </div>
            <Button
              className="btn-simple btn-icon-only btn-round pull-right"
              color="warning"
              data-placement="left"
              id="tooltip147303140"
              size="sm"
            >
              <i className="ni ni-favourite-28"></i>
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip147303140"
            >
              Add to wishlist
            </UncontrolledTooltip>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard10;
