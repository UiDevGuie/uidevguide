import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Table1 from "components/tables/Table1.js";
import Table2 from "components/tables/Table2.js";

function TablesSection() {
  return (
    <>
      <div className="cd-section" id="tables">
        <Table1 />
        <Table2 />
      </div>
    </>
  );
}

export default TablesSection;
