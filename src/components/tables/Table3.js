import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

function Table3() {
  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th className="sort" data-sort="name" scope="col">
              Project
            </th>
            <th className="sort" data-sort="budget" scope="col">
              Budget
            </th>
            <th className="sort" data-sort="status" scope="col">
              Status
            </th>
            <th scope="col">Users</th>
            <th className="sort" data-sort="completion" scope="col">
              Completion
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="list">
          <tr>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/theme/bootstrap.jpg")}
                  ></img>
                </a>
                <Media body>
                  <span className="name mb-0 text-sm">Argon Design System</span>
                </Media>
              </Media>
            </th>
            <td className="budget">$2500 USD</td>
            <td>
              <Badge className="badge-dot mr-4">
                <i className="bg-warning"></i>
                <span className="status">pending</span>
              </Badge>
            </td>
            <td>
              <div className="avatar-group">
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip411183965"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-1.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip411183965">
                  Ryan Tompson
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip745196868"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-2.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip745196868">
                  Romina Hadid
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip462969587"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-3.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip462969587">
                  Alexander Smith
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip518839912"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip518839912">
                  Jessica Doe
                </UncontrolledTooltip>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="completion mr-2">60%</span>
                <div>
                  <Progress color="warning" max="100" value="60"></Progress>
                </div>
              </div>
            </td>
            <td className="text-right">
              <Button
                className="text-light"
                color="icon-only"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                role="button"
                size="sm"
              >
                <i className="fas fa-ellipsis-v"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/theme/angular.jpg")}
                  ></img>
                </a>
                <Media body>
                  <span className="name mb-0 text-sm">
                    Angular Now UI Kit PRO
                  </span>
                </Media>
              </Media>
            </th>
            <td className="budget">$1800 USD</td>
            <td>
              <Badge className="badge-dot mr-4">
                <i className="bg-success"></i>
                <span className="status">completed</span>
              </Badge>
            </td>
            <td>
              <div className="avatar-group">
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip766138884"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-1.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip766138884">
                  Ryan Tompson
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip571622963"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-2.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip571622963">
                  Romina Hadid
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip525285585"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-3.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip525285585">
                  Alexander Smith
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip48326835"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip48326835">
                  Jessica Doe
                </UncontrolledTooltip>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="completion mr-2">100%</span>
                <div>
                  <Progress color="success" max="100" value="100"></Progress>
                </div>
              </div>
            </td>
            <td className="text-right">
              <Button
                className="text-light"
                color="icon-only"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                role="button"
                size="sm"
              >
                <i className="fas fa-ellipsis-v"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/theme/sketch.jpg")}
                  ></img>
                </a>
                <Media body>
                  <span className="name mb-0 text-sm">Black Dashboard</span>
                </Media>
              </Media>
            </th>
            <td className="budget">$3150 USD</td>
            <td>
              <Badge className="badge-dot mr-4">
                <i className="bg-danger"></i>
                <span className="status">delayed</span>
              </Badge>
            </td>
            <td>
              <div className="avatar-group">
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip690800276"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-1.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip690800276">
                  Ryan Tompson
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip393764125"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-2.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip393764125">
                  Romina Hadid
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip580586961"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-3.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip580586961">
                  Alexander Smith
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip797243372"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip797243372">
                  Jessica Doe
                </UncontrolledTooltip>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="completion mr-2">72%</span>
                <div>
                  <Progress color="danger" max="100" value="72"></Progress>
                </div>
              </div>
            </td>
            <td className="text-right">
              <Button
                className="text-light"
                color="icon-only"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                role="button"
                size="sm"
              >
                <i className="fas fa-ellipsis-v"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/theme/react.jpg")}
                  ></img>
                </a>
                <Media body>
                  <span className="name mb-0 text-sm">
                    React Material Dashboard
                  </span>
                </Media>
              </Media>
            </th>
            <td className="budget">$4400 USD</td>
            <td>
              <Badge className="badge-dot mr-4">
                <i className="bg-info"></i>
                <span className="status">on schedule</span>
              </Badge>
            </td>
            <td>
              <div className="avatar-group">
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip554219832"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-1.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip554219832">
                  Ryan Tompson
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip531551238"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-2.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip531551238">
                  Romina Hadid
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip972924186"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-3.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip972924186">
                  Alexander Smith
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip809052216"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip809052216">
                  Jessica Doe
                </UncontrolledTooltip>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="completion mr-2">90%</span>
                <div>
                  <Progress color="info" max="100" value="90"></Progress>
                </div>
              </div>
            </td>
            <td className="text-right">
              <Button
                className="text-light"
                color="icon-only"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                role="button"
                size="sm"
              >
                <i className="fas fa-ellipsis-v"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/theme/vue.jpg")}
                  ></img>
                </a>
                <Media body>
                  <span className="name mb-0 text-sm">
                    Vue Paper UI Kit PRO
                  </span>
                </Media>
              </Media>
            </th>
            <td className="budget">$2200 USD</td>
            <td>
              <Badge className="badge-dot mr-4">
                <i className="bg-success"></i>
                <span className="status">completed</span>
              </Badge>
            </td>
            <td>
              <div className="avatar-group">
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip381430419"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-1.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip381430419">
                  Ryan Tompson
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip674824249"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-2.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip674824249">
                  Romina Hadid
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip527431314"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-3.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip527431314">
                  Alexander Smith
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm rounded-circle"
                  href="#pablo"
                  id="tooltip868302744"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip868302744">
                  Jessica Doe
                </UncontrolledTooltip>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="completion mr-2">100%</span>
                <div>
                  <Progress color="success" max="100" value="100"></Progress>
                </div>
              </div>
            </td>
            <td className="text-right">
              <Button
                className="text-light"
                color="icon-only"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                role="button"
                size="sm"
              >
                <i className="fas fa-ellipsis-v"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <nav aria-label="...">
        <Pagination
          className="pagination justify-content-end mb-0"
          listClassName=" justify-content-end mb-0"
        >
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              tabIndex="-1"
            >
              <i className="fas fa-angle-left"></i>
              <span className="sr-only">Previous</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="active">
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              2 <span className="sr-only">(current)</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-angle-right"></i>
              <span className="sr-only">Next</span>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default Table3;
