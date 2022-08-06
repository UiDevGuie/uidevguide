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

function ProductCard12() {
  return (
    <>
      <Card className="card-product">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img rounded"
              src={require("assets/img/pages/jeans.png")}
            ></img>
          </a>
        </div>
        <CardBody>
          <h6 className="category text-warning">Trending</h6>
          <CardTitle tag="h4">
            <CardLink href="#pablo" onClick={(e) => e.preventDefault()}>
              D &amp; G
            </CardLink>
          </CardTitle>
          <div className="card-description opacity-8 mt-2">
            Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy from
            hard-wearing red textured-leather.
          </div>
          <CardFooter className="d-flex justify-content-between">
            <div className="price-container">
              <span className="price">€ 1,359</span>
            </div>
            <Button
              className="btn-simple btn-icon-only btn-round pull-right"
              color="warning"
              data-placement="left"
              id="tooltip903495859"
              size="sm"
            >
              <i className="ni ni-favourite-28"></i>
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip903495859"
            >
              Add to wishlist
            </UncontrolledTooltip>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard12;
