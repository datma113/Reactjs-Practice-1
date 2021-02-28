import "bootstrap/dist/css/bootstrap.min.css";

import ColorPicker from "./components/ColorPicker";
import SizePicker from "./components/SizePicker";

function App() {

  const setTextFromColorPicker = (value) => {
    console.log(`value: ${value}`);
  }


  return (
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

      </div>
    </div>
  );
}

export default App;
