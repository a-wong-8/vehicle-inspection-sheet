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

      <div className="lg:w-[70rem] mx-auto lg:flex print:flex">
        <VehicleCanvas />

        <section className="md:flex md:flex-wrap print:flex print:flex-wrap">
          <h2 className="bg-black text-white w-full lg:flex justify-center border-t border-r">
            Brakes and Tires
          </h2>
          {quadrants.map((wheel, index) => (
            <TiresAndBrakes wheel={wheel} key={index}/>
          ))}
        </section>
      </div>

      <div className="flex flex-wrap lg:w-[70rem] mx-auto rounded-lg">
        {mpi.map((item, index) =>
          typeof item !== "object" ? (
            <div className="flex mx-0 basis-1/2 lg:basis-1/3 print:basis-1/3">
              <CheckBoxes item={item} key={index} />
            </div>
          ) : (
            <>
              <h2 className="flex basis 1/3 mx-0 bg-black text-white w-full justify-center">
                {Object.values(item)}
              </h2>
              <br />
            </>
          )
        )}
      </div>

      <div className="lg:w-[70rem] mx-auto text-left">
        <Notes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
