import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TiresAndBrakes({ wheel, onAverageChange }) {
  const { t } = useTranslation();
  const brakesArray = t('brakes', { returnObjects: true });
  const wear = t('wear', { returnObjects: true });

  // Array to store each checkbox group selection
  const [checkboxSelections, setCheckboxSelections] = useState([null, null, null, null]);

  const handleCheck = (index, value) => {
    const updatedSelections = checkboxSelections.map((selected, i) =>
      i === index ? (selected === value ? null : value) : selected
    );
    setCheckboxSelections(updatedSelections);

    // Calculate the average condition
    const selectedScores = updatedSelections.filter(score => score !== null);
    const averageCondition =
      selectedScores.length > 0
        ? selectedScores.reduce((acc, curr) => acc + curr, 0) / selectedScores.length
        : 0;

    // If parent component needs to track, pass average up
    onAverageChange && onAverageChange(averageCondition);
  };

  return (
    <div className="border w-full md:basis-1/2 print:basis-1/2 print:text-sm">
      <span className="font-semibold text-sm border w-full flex bg-gray-200 justify-center border-black">
        {wheel}
      </span>

      {[0, 1, 2, 3].map((index) => (
        <div key={index} className="flex">
          <div className="bg-green-500 w-7">
            <input
              type="checkbox"
              className="scale-125"
              checked={checkboxSelections[index] === 1}
              onChange={() => handleCheck(index, 1)} // Green = 1
            />
          </div>
          <div className="bg-yellow-500 w-7">
            <input
              type="checkbox"
              className="scale-125"
              checked={checkboxSelections[index] === 2}
              onChange={() => handleCheck(index, 2)} // Yellow = 2
            />
          </div>
          <div className="bg-red-500 w-7">
            <input
              type="checkbox"
              className="scale-125"
              checked={checkboxSelections[index] === 3}
              onChange={() => handleCheck(index, 3)} // Red = 3
            />
          </div>
          <label className="ml-1">
            {brakesArray[index]}
            {index === 2 ? (
              <select className="border ml-2" defaultValue="--">
                <option disabled>--</option>
                {wear.map((wearOption, i) => (
                  <option key={i}>{wearOption}</option>
                ))}
              </select>
            ) : (
              <input type="text" className="border w-14 ml-2" placeholder=" --" />
            )}
          </label>
        </div>
      ))}

      <div>
        <label>{brakesArray[4]}</label>
        <br />
        <label>{brakesArray[5]}</label>
        <input type="text" className="border w-11 mr-2" placeholder=" --" />
        <label>{brakesArray[6]}</label>
        <input type="text" className="border w-11" placeholder=" --" />
      </div>
    </div>
  );
}
