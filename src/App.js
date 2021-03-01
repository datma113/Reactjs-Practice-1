import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ColorPicker from "./components/ColorPicker";
import SizePicker from "./components/SizePicker";
import NavComp from "./components/NavComp";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const setTextFromColorPicker = (value) => {
    console.log(`value: ${value}`);
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <p>Practice 1</p>
          <hr />
          <div className="row">
            <div className="col-6">
              <ColorPicker dataSent={setTextFromColorPicker} />
            </div>
            <div className="col-6">
              <SizePicker />
            </div>
          </div>
          <br></br>
          <NavComp />
        </div>
        <Route path="/" exact component={Main} />
        <Route path="/contact"  component={Contact} />
        <Route path="/about"  component={About} />
      </div>
    </Router>
  );
}

export default App;
