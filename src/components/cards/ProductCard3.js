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

function ProductCard3() {
  return (
    <>
      <Card className="card-product card-plain">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." src={require("assets/img/pages/shirt.png")}></img>
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <CardTitle tag="h5">Wooyoungmi</CardTitle>
          </a>
          <CardFooter className="d-flex justify-content-between">
            <div className="price-container">
              <span className="price opacity-8">€ 555</span>
            </div>
            <Button
              className="btn-icon-only btn-round pull-right"
              color="danger"
              data-placement="left"
              id="tooltip48700732"
              size="sm"
            >
              <i className="ni ni-favourite-28"></i>
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip48700732"
            >
              Add to wishlist
            </UncontrolledTooltip>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard3;
