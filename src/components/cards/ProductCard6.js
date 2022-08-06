import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function ProductCard6() {
  return (
    <>
      <Card className="card-product">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." src={require("assets/img/pages/shorts.png")}></img>
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <CardTitle tag="h4">Gucci Shorts</CardTitle>
          </a>
          <CardFooter>
            <div className="price-container">
              <span className="price-old">€ 879</span>
              <span className="price-new ml-1">€ 499</span>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard6;
