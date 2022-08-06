import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Table5() {
  return (
    <>
      <Card className="card-plain">
        <CardBody>
          <Table className="tablesorter table-shopping" responsive>
            <thead>
              <tr>
                <th className="text-center"></th>
                <th>Product</th>
                <th>Color</th>
                <th>Size</th>
                <th className="text-right">Price</th>
                <th className="text-right">Qty</th>
                <th className="text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="img-container">
                    <img alt="..." src={require("assets/img/jacket.png")}></img>
                  </div>
                </td>
                <td className="td-name">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Monaco bees <br></br>
                    natté jacket
                  </a>
                  <br></br>
                  <small>by Gucci</small>
                </td>
                <td>Blue</td>
                <td>M</td>
                <td className="td-number">
                  <small></small>
                  1,490
                </td>
                <td className="td-number">
                  1{" "}
                  <ButtonGroup className="mb-1">
                    <Button color="info" size="sm">
                      <i className="ni ni-fat-delete"></i>
                    </Button>
                    <Button color="info" size="sm">
                      <i className="ni ni-fat-add"></i>
                    </Button>
                  </ButtonGroup>
                </td>
                <td className="td-number">
                  <small></small>
                  1,490
                </td>
                <td className="td-actions">
                  <Button
                    className="text-danger sm"
                    color="link"
                    data-placement="left"
                    id="tooltip612677208"
                    type="button"
                  >
                    <i className="ni ni-fat-remove"></i>
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="left"
                    target="tooltip612677208"
                  >
                    Remove item
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="img-container">
                    <img alt="..." src={require("assets/img/boots.png")}></img>
                  </div>
                </td>
                <td className="td-name">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Patent-leather <br></br>
                    ankle boots
                  </a>
                  <br></br>
                  <small>by Prada</small>
                </td>
                <td>Black</td>
                <td>41</td>
                <td className="td-number">
                  <small></small>
                  1,985
                </td>
                <td className="td-number">
                  2{" "}
                  <ButtonGroup className="mb-1">
                    <Button color="info" size="sm">
                      <i className="ni ni-fat-delete"></i>
                    </Button>
                    <Button color="info" size="sm">
                      <i className="ni ni-fat-add"></i>
                    </Button>
                  </ButtonGroup>
                </td>
                <td className="td-number">
                  <small></small>
                  3,890
                </td>
                <td className="td-actions">
                  <Button
                    className="text-danger sm"
                    color="link"
                    data-placement="left"
                    id="tooltip254100480"
                    type="button"
                  >
                    <i className="ni ni-fat-remove"></i>
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="left"
                    target="tooltip254100480"
                  >
                    Remove item
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="img-container">
                    <img
                      alt="..."
                      src={require("assets/img/sweater.png")}
                    ></img>
                  </div>
                </td>
                <td className="td-name">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Ophidia GG
                  </a>
                  <br></br>
                  <small>by Saint Laurent</small>
                </td>
                <td>Black</td>
                <td>L</td>
                <td className="td-number">
                  <small></small>
                  799
                </td>
                <td className="td-number">
                  1{" "}
                  <ButtonGroup className="mb-1">
                    <Button color="info" size="sm">
                      <i className="ni ni-fat-delete"></i>
                    </Button>
                    <Button color="info" size="sm">
                      <i className="ni ni-fat-add"></i>
                    </Button>
                  </ButtonGroup>
                </td>
                <td className="td-number">
                  <small></small>
                  799
                </td>
                <td className="td-actions">
                  <Button
                    className="text-danger sm"
                    color="link"
                    data-placement="left"
                    id="tooltip720243182"
                    type="button"
                  >
                    <i className="ni ni-fat-remove"></i>
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="left"
                    target="tooltip720243182"
                  >
                    Remove item
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td className="td-total">Total</td>
                <td className="td-price">
                  <small>€</small>
                  7,346
                </td>
                <td className="text-right" colSpan="2">
                  <Button
                    className="btn-round"
                    color="info"
                    id="tooltip663251633"
                    type="button"
                  >
                    Complete Purchase
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip663251633"
                  ></UncontrolledTooltip>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}

export default Table5;
