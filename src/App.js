import "./App.css";
import CheckBoxes from "./components/checkboxes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import VehicleCanvas from "./components/vehicle-canvas";
import VehicleInfo from "./components/vehicle-info";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <VehicleInfo />
      </div>

      <div>
        <VehicleCanvas />
      </div>

      <div>
        <CheckBoxes />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
