import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function ProductCard8() {
  return (
    <>
      <Card className="card-product">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." src={require("assets/img/pages/bullet.png")}></img>
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <CardTitle tag="h4">Necklace</CardTitle>
          </a>
          <CardFooter>
            <div className="price-container">
              <span className="price">€ 229</span>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard8;
