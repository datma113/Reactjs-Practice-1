import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import ColorPicker from "./components/ColorPicker";
import SizePicker from "./components/SizePicker";
import NavComp from "./components/NavComp";
import AnotherNav from "./components/AnotherNav";
import TestRedux from "./components/TestRedux";
import Routes from "./Routes";
import Array from "./components/Array";
import TestAPI from "./components/TestAPI";

function App() {
    

    const setTextFromColorPicker = (value) => {
        console.log(`value: ${value}`);
    };

    const routesRender = Routes.map((route, index) => {
        return (
            <Route path={route.path} exact={route.exact} component={route.component} key={index} />
        );
    });

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
                    <AnotherNav />
                </div>
                {routesRender}
                <TestRedux />
                <Array />
                <TestAPI />
            </div>
        </Router>
    );
}

export default App;
