import "./App.css";
import CheckBoxes from "./components/checkboxes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import VehicleCanvas from "./components/vehicle-canvas";
import VehicleInfo from "./components/vehicle-info";
import mpi from "./assets/mpi";
import Notes from "./components/notes";
import TiresAndBrakes from "./components/tires";
import ColorCode from "./components/color-code";
import quadrants from "./assets/quadrants";

function App() {

  return (
    <div className="App">
      <Navbar />

      <div>
        <VehicleInfo />
      </div>

      <div>
        <ColorCode />
      </div>

      <div className="w-[70rem] mx-auto flex">
        <VehicleCanvas />

        <section className="flex flex-wrap">
        <span className="bg-black text-white w-full flex justify-center border">
          Brakes and Tires
        </span>
          {quadrants.map((wheel) => (
            <TiresAndBrakes wheel={wheel} />
          ))}
        </section>
      </div>

      <div className="flex flex-wrap w-[70rem] mx-auto rounded-lg">
        {mpi.map((item, index) =>
          typeof item !== "object" ? (
            <div className="flex mx-0 basis-1/3">
              <CheckBoxes item={item} key={index} />
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
        <Notes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
