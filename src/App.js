import "./App.css";
import CheckBoxes from "./components/checkboxes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import VehicleCanvas from "./components/vehicle-canvas";
import VehicleInfo from "./components/vehicle-info";
import Notes from "./components/notes";
import TiresAndBrakes from "./components/tires";
import ColorCode from "./components/color-code";
import "./i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
  const { t } = useTranslation();
  const mpiArray = t("mpi", { returnObjects: true });
  const tiresArray = t("quadrants", { returnObjects: true });
  const heading = t("headings", { returnObjects: true });

  const items = ["Item 1", "Item 2", "Item 3"];
  const [colorScores, setColorScores] = useState(items.map(() => 0));

  // Update color score based on index and selected color
  const handleColorScore = (index, score) => {
    setColorScores((prev) => {
      const newScores = [...prev];
      newScores[index] = score;
      return newScores;
    });
  };
  // Calculate the average condition score, excluding unselected items (0)
  const selectedScores = colorScores.filter((score) => score > 0);
  const averageCondition = selectedScores.length
    ? (
        selectedScores.reduce((a, b) => a + b, 0) / selectedScores.length
      ).toFixed(2)
    : 0;

  return (
    <div className="App">
      <Navbar />

      <div>
        <VehicleInfo />
      </div>

      <div>
        <ColorCode conditionAverage={averageCondition} />
      </div>

      {/* Vehicle canvas and tires/brakes */}
      <div className="lg:w-[69rem] print:w-[69rem] mx-auto lg:flex print:flex">
        <VehicleCanvas />
        <section className="md:flex md:flex-wrap print:flex print:flex-wrap lg:w-[50%] print:w-[50%]">
          <h2 className="bg-black text-white w-full lg:flex justify-center border-t border-r">
            {heading[4]}
          </h2>
          {tiresArray.map((wheel, index) => (
            <TiresAndBrakes
              wheel={wheel}
              key={index}
              onAverageChange={(score) => handleColorScore(index, score)}
            />
          ))}
        </section>
      </div>

      {/* Checkboxes */}
      <div className="flex flex-wrap lg:w-[69rem] print:w-[69rem] mx-auto rounded-lg">
        {mpiArray.map((item, index) =>
          typeof item !== "object" ? (
            <div className="flex mx-0 basis-1/2">
              <CheckBoxes
                item={item}
                key={index}
                onColorScore={(score) => handleColorScore(index, score)}
              />
            </div>
          ) : (
            <>
              <h2 className="flex mx-0 bg-black text-white w-full justify-center">
                {Object.values(item)}
              </h2>
              <br />
            </>
          )
        )}
      </div>

      <div className="lg:w-[69rem] mx-auto text-left">
        <Notes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
