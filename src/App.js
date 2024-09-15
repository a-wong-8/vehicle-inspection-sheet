import "./App.css";
import CheckBoxes from "./components/checkboxes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import VehicleCanvas from "./components/vehicle-canvas";
import VehicleInfo from "./components/vehicle-info";
import mpi from "./assets/mpi";
import Notes from "./components/notes";

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

      <div className="flex flex-wrap w-[70rem] mx-auto">
        {mpi.map((item) =>
          typeof item !== "object" ? (
            <div className="flex mx-0 basis-1/3">
              <CheckBoxes item={item} />
            </div>
          ) : (
            <>
              <span className="flex basis 1/3 mx-0 bg-black text-white w-full justify-center">
                {Object.values(item)}
              </span>
              <br />
            </>
          )
        )}
      </div>

      <div>
        <Notes/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
