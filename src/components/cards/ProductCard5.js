import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function ProductCard5() {
  return (
    <>
      <Card className="card-product">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." src={require("assets/img/pages/hat.png")}></img>
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <CardTitle tag="h4">Winter Hat</CardTitle>
          </a>
          <CardFooter>
            <div className="price-container">
              <span className="price">€ 99</span>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard5;
