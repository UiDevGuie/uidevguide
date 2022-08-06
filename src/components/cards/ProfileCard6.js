import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
} from "reactstrap";

// Core Components

function ProfileCard6() {
  return (
    <>
      <Card className="card-profile" data-background="full">
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <img
            alt="..."
            className="img img-raised rounded"
            src={require("assets/img/theme/lucy.jpg")}
          ></img>
        </a>
        <div className="card-image">
          <UncontrolledDropdown>
            <DropdownToggle
              aria-expanded={false}
              caret
              className="btn-icon-only"
              color="link"
              data-toggle="dropdown"
              type="button"
            >
              <i className="ni ni-settings-gear-65"></i>
            </DropdownToggle>
            <DropdownMenu right x-placement="bottom-end">
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Edit Profile
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Settings
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Log out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <CardBody>
          <h4 className="display-4">Jane Doe</h4>
          <p className="lead mt-0 mb-1">Team Lead</p>
          <Table className="tablesorter" responsive>
            <tbody>
              <tr>
                <td className="text-left pl-0">
                  <Badge className="badge-circle mr-2" color="info">
                    <i className="ni ni-hat-3"></i>
                  </Badge>
                  Skills
                </td>
                <td className="text-right">Leadership</td>
              </tr>
              <tr>
                <td className="text-left pl-0">
                  <Badge className="badge-circle mr-2" color="info">
                    <i className="ni ni-satisfied"></i>
                  </Badge>
                  Hobbies
                </td>
                <td className="text-right">Skiing, Chess</td>
              </tr>
              <tr>
                <td className="text-left pl-0">
                  <Badge className="badge-circle mr-2" color="info">
                    <i className="ni ni-bullet-list-67"></i>
                  </Badge>
                  Level
                </td>
                <td className="text-right">• • • • •</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileCard6;
