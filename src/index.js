import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import App from "views/App.js";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
 
  document.getElementById("root")
);
