import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TiresAndBrakes({ wheel }) {
  const [checkedBoxOne, setCheckedBoxOne] = useState(null);
  const [checkedBoxTwo, setCheckedBoxTwo] = useState(null);
  const [checkedBoxThree, setCheckedBoxThree] = useState(null);
  const [checkedBoxFour, setCheckedBoxFour] = useState(null);

  const handleCheckOne = (index) => {
    setCheckedBoxOne(index === checkedBoxOne ? null : index);
  };
  const handleCheckTwo = (index) => {
    setCheckedBoxTwo(index === checkedBoxTwo ? null : index);
  };
  const handleCheckThree = (index) => {
    setCheckedBoxThree(index === checkedBoxThree ? null : index);
  };
  const handleCheckFour = (index) => {
    setCheckedBoxFour(index === checkedBoxFour ? null : index);
  };

  const { t } = useTranslation();
  const brakesArray = t('brakes', { returnObjects: true });
  const wear = t('wear', { returnObjects: true });

  return (
    <div className="border w-full md:basis-1/2 print:basis-1/2">
      <span className="font-semibold text-sm border w-full flex bg-gray-200 justify-center border-black print:text-sm">
        {wheel}
      </span>

      <div className="flex">
        <div className="bg-green-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxOne === 1}
            onChange={() => handleCheckOne(1)}
          />
        </div>
        <div className="bg-yellow-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxOne === 2}
            onChange={() => handleCheckOne(2)}
          />
        </div>
        <div className="bg-red-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxOne === 3}
            onChange={() => handleCheckOne(3)}
          />
        </div>

        <label className="ml-1">
          {brakesArray[0]}
          <input type="text" className="border w-14 ml-2" placeholder=" --"/>
        </label>
      </div>

      <div className="flex">
        <div className="bg-green-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxTwo === 1}
            onChange={() => handleCheckTwo(1)}
          />
        </div>
        <div className="bg-yellow-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxTwo === 2}
            onChange={() => handleCheckTwo(2)}
          />
        </div>
        <div className="bg-red-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxTwo === 3}
            onChange={() => handleCheckTwo(3)}
          />
        </div>
        <label className="ml-1">
          {brakesArray[1]}
          <input type="text" className="border w-14 ml-2" placeholder=" --"/>
        </label>
      </div>

      <div className="flex">
        <div className="bg-green-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxThree === 1}
            onChange={() => handleCheckThree(1)}
          />
        </div>
        <div className="bg-yellow-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxThree === 2}
            onChange={() => handleCheckThree(2)}
          />
        </div>
        <div className="bg-red-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxThree === 3}
            onChange={() => handleCheckThree(3)}
          />
        </div>
        <label className="ml-1">
          {brakesArray[2]}
          <select className="border ml-2" defaultValue="--">
            <option disabled>--</option>
            <option>{wear[0]}</option>
            <option>{wear[1]}</option>
            <option>{wear[2]}</option>
            <option>{wear[3]}</option>
            <option>{wear[4]}</option>
            <option>{wear[5]}</option>
          </select>
        </label>
      </div>

      <div className="flex">
        <div className="bg-green-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxFour === 1}
            onChange={() => handleCheckFour(1)}
          />
        </div>
        <div className="bg-yellow-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxFour === 2}
            onChange={() => handleCheckFour(2)}
          />
        </div>
        <div className="bg-red-500 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxFour === 3}
            onChange={() => handleCheckFour(3)}
          />
        </div>
        <label className="ml-1">
          {brakesArray[3]}
          </label>
      </div>

      <div>
        <label>
          {brakesArray[4]}
          </label>
        <br />
        <label>{brakesArray[5]}</label>
        <input type="text" className="border w-11 mr-2" placeholder=" --"/>
        <label>{brakesArray[6]} </label>
        <input type="text" className="border w-11" placeholder=" --"/>
      </div>
    </div>
  );
}
