import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import { Container, Row, Button } from "reactstrap";

// Core Components
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AccountSettings from "views/examples/AccountSettings.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ChatPage from "views/examples/ChatPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error from "views/examples/Error.js";
import Error500 from "views/examples/Error500.js";
import InvoicePage from "views/examples/InvoicePage.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import PricingPage from "views/examples/PricingPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ResetPage from "views/examples/ResetPage.js";

import Javascript from "../routes/Javascript/Javascript";
import DemoNavbar from "../components/navbars/DemoNavbar";
import Editor from '../Admin/editor';
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
          <Route path="/editor" exact render={(props) => <Editor {...props} />} />
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
          <Route
            path="/about-us"
            exact
            render={(props) => <AboutUs {...props} />}
          />
          <Route
            path="/account-settings"
            exact
            render={(props) => <AccountSettings {...props} />}
          />
          <Route
            path="/blog-post"
            exact
            render={(props) => <BlogPost {...props} />}
          />
          <Route
            path="/blog-posts"
            exact
            render={(props) => <BlogPosts {...props} />}
          />
          <Route
            path="/chat-page"
            exact
            render={(props) => <ChatPage {...props} />}
          />
          <Route
            path="/checkout-page"
            exact
            render={(props) => <CheckoutPage {...props} />}
          />
          <Route
            path="/contact-us"
            exact
            render={(props) => <ContactUs {...props} />}
          />
          <Route
            path="/ecommerce"
            exact
            render={(props) => <Ecommerce {...props} />}
          />
          <Route path="/error" exact render={(props) => <Error {...props} />} />
          <Route
            path="/error-500"
            exact
            render={(props) => <Error500 {...props} />}
          />
          <Route
            path="/invoice-page"
            exact
            render={(props) => <InvoicePage {...props} />}
          />
          <Route
            path="/landing-page"
            exact
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/login-page"
            exact
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            path="/pricing-page"
            exact
            render={(props) => <PricingPage {...props} />}
          />
          <Route
            path="/product-page"
            exact
            render={(props) => <ProductPage {...props} />}
          />
          <Route
            path="/profile-page"
            exact
            render={(props) => <ProfilePage {...props} />}
          />
          <Route
            path="/register-page"
            exact
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/reset-page"
            exact
            render={(props) => <ResetPage {...props} />}
          />
          <Redirect to="/index" />
        </Switch>
      </BrowserRouter>,
    </>
  );
}

export default App;
