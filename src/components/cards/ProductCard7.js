import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function ProductCard7() {
  return (
    <>
      <Card className="card-product">
        <div className="card-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." src={require("assets/img/pages/bracelet.png")}></img>
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <CardTitle tag="h4">Ice Bracelet</CardTitle>
          </a>
          <CardFooter>
            <div className="price-container">
              <span className="price">€ 19,999</span>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard7;
