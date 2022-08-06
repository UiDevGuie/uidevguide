import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function ProductCard1() {
  return (
    <>
      <Card className="card-product card-plain">
        <div className="card-image">
          <Badge color="info">NEW</Badge>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." src={require("assets/img/pages/tshirt.png")}></img>
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <CardTitle tag="h5">Ralph Lauren</CardTitle>
          </a>
          <CardFooter className="d-flex justify-content-between">
            <div className="price-container">
              <span className="price opacity-8">€ 300</span>
            </div>
            <Button
              className="btn-icon-only btn-round"
              color="danger"
              data-placement="left"
              id="tooltip422725574"
              size="sm"
            >
              <i className="ni ni-favourite-28"></i>
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip422725574"
            >
              Remove from wishlist
            </UncontrolledTooltip>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard1;
