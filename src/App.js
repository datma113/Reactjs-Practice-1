import "bootstrap/dist/css/bootstrap.min.css";

import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Practice 1</p>        
        <hr />
        <div className="row">
          <div className="col-6">
            <ColorPicker className="col-6" />
          </div>
        
         
        </div>

      </div>
    </div>
  );
}

export default App;
