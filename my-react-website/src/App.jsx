import React from "react";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <div>
          <Navbar />
        </div>
        <Home />
        <Booking />
        <Contact />
      </div>
    </div>
  );
}

export default App;

/*
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/booking" className="nav-link">
                Book a Table
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/booking" component={Booking} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
*/
