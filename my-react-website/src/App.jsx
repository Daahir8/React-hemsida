import React from "react";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <Home />
        <Booking />
        <Contact />
      </div>
    </div>
  );
}

export default App;
