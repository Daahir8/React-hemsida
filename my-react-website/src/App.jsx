import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="HeadFoot">
      <Home />

      <div MainAbout>
        <About />
      </div>
      <Contact />
    </div>
  );
}

export default App;

// Path: my-react-website/src/index.js
