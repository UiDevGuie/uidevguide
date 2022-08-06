import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Table3 from "components/tables/Table3.js";
import Table4 from "components/tables/Table4.js";
import Table5 from "components/tables/Table5.js";

function Tables() {
  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4">Tables</h3>
      <div className="mb-4 mt-4">
        <small className="text-uppercase font-weight-bold">
          Simple With Actions
        </small>
      </div>
      <Table3 />
      <div className="mb-4 mt-4">
        <small className="text-uppercase font-weight-bold">
          Striped With Checkboxes
        </small>
      </div>
      <Table4 />
      <div className="mb-4 mt-4">
        <small className="text-uppercase font-weight-bold">
          Shopping Cart Table
        </small>
      </div>
      <Table5 />
    </>
  );
}

export default Tables;
