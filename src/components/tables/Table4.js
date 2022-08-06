import React from "react";

// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Progress,
  Table,
} from "reactstrap";

function Table4() {
  return (
    <>
      <div className="table">
        <div className="tools float-right">
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              className="btn-icon"
              color="link"
              data-toggle="dropdown"
              type="button"
            >
              <i className="ni ni-settings-gear-65"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem
                className="text-danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Remove Data
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <Table responsive striped>
          <thead className="text-primary">
            <tr>
              <th className="text-center">#</th>
              <th>Product Name</th>
              <th>Type</th>
              <th>Milestone</th>
              <th className="text-center">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    defaultChecked
                    id="checkbox1"
                    type="checkbox"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox1"
                  ></label>
                </div>
              </td>
              <td>Moleskine Agenda</td>
              <td>Office</td>
              <td>
                <div className="progress-container">
                  <span className="progress-badge">v1.2.0</span>
                  <Progress max="100" value="25"></Progress>
                </div>
              </td>
              <td className="text-center">25</td>
              <td className="text-right">€ 49</td>
              <td className="text-right">€ 1,225</td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="checkbox2"
                    type="checkbox"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox2"
                  ></label>
                </div>
              </td>
              <td>Stabilo Pen</td>
              <td>Office</td>
              <td>
                <div className="progress-container">
                  <span className="progress-badge">v1.4.0</span>
                  <Progress max="100" value="45"></Progress>
                </div>
              </td>
              <td className="text-center">30</td>
              <td className="text-right">€ 10</td>
              <td className="text-right">€ 300</td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    defaultChecked
                    id="checkbox3"
                    type="checkbox"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox3"
                  ></label>
                </div>
              </td>
              <td>A4 Paper Pack</td>
              <td>Office</td>
              <td>
                <div className="progress-container">
                  <span className="progress-badge">v2.0.0</span>
                  <Progress max="100" value="10"></Progress>
                </div>
              </td>
              <td className="text-center">50</td>
              <td className="text-right">€ 10.99</td>
              <td className="text-right">€ 109</td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    defaultChecked
                    id="checkbox4"
                    type="checkbox"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox4"
                  ></label>
                </div>
              </td>
              <td>Apple iPad</td>
              <td>Meeting</td>
              <td>
                <div className="progress-container">
                  <span className="progress-badge">v1.5.0</span>
                  <Progress max="100" value="80"></Progress>
                </div>
              </td>
              <td className="text-center">10</td>
              <td className="text-right">€ 499.00</td>
              <td className="text-right">€ 4,990</td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="checkbox5"
                    type="checkbox"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox5"
                  ></label>
                </div>
              </td>
              <td>Apple iPhone</td>
              <td>Communication</td>
              <td>
                <div className="progress-container">
                  <span className="progress-badge">v1.0.0</span>
                  <Progress max="100" value="30"></Progress>
                </div>
              </td>
              <td className="text-center">10</td>
              <td className="text-right">€ 599.00</td>
              <td className="text-right">€ 5,999</td>
            </tr>
            <tr>
              <td colSpan="5"></td>
              <td className="td-total">Total</td>
              <td className="td-price">€ 35,999</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Table4;
