import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import { Container, Row, Button } from "reactstrap";

// Core Components
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import LandingPage from "views/examples/LandingPage.js";
import Javascript from "../routes/Javascript/Javascript";
import DemoNavbar from "../components/navbars/DemoNavbar";
function App() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <BrowserRouter>
        <Switch>
       
          <Route path="/index" exact render={(props) => <LandingPage {...props} />} />
          <Route path="/javascript" exact render={(props) => <Javascript {...props} />} />
          <Route
            path="/sections"
            exact
            render={(props) => <Sections {...props} />}
          />
          <Route
            path="/presentation"
            exact
            render={(props) => <Presentation {...props} />}
          />
          <Redirect to="/index" />
        </Switch>
      </BrowserRouter>,
    </>
  );
}

export default App;
