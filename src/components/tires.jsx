import { useState } from "react";

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

  return (
    <div className="border w-full basis-1/2">
      <span className="font-semibold text-sm border w-full flex bg-gray-200 justify-center border-black">
        {wheel}
      </span>

      <div className="flex">
        <div className="bg-green-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxOne === 1}
            onChange={() => handleCheckOne(1)}
          />
        </div>
        <div className="bg-yellow-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxOne === 2}
            onChange={() => handleCheckOne(2)}
          />
        </div>
        <div className="bg-red-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxOne === 3}
            onChange={() => handleCheckOne(3)}
          />
        </div>

        <label className="ml-1">
          Brake Lining
          <select type="text" className="border ml-2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option selected>10</option>
          </select>{" "}
          mm
        </label>
      </div>

      <div className="flex">
        <div className="bg-green-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxTwo === 1}
            onChange={() => handleCheckTwo(1)}
          />
        </div>
        <div className="bg-yellow-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxTwo === 2}
            onChange={() => handleCheckTwo(2)}
          />
        </div>
        <div className="bg-red-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxTwo === 3}
            onChange={() => handleCheckTwo(3)}
          />
        </div>
        <label className="ml-1">
          Tire Tread
          <select type="text" className="border ml-2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option selected>10</option>
            <option>11</option>
          </select>{" "}
          /32"
        </label>
      </div>

      <div className="flex">
        <div className="bg-green-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxThree === 1}
            onChange={() => handleCheckThree(1)}
          />
        </div>
        <div className="bg-yellow-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxThree === 2}
            onChange={() => handleCheckThree(2)}
          />
        </div>
        <div className="bg-red-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxThree === 3}
            onChange={() => handleCheckThree(3)}
          />
        </div>
        <label className="ml-1">
          Wear
          <select className="border ml-2">
            <option>Even</option>
            <option>Toe</option>
            <option>Camber</option>
          </select>
        </label>
      </div>

      <div className="flex">
        <div className="bg-green-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxFour === 1}
            onChange={() => handleCheckFour(1)}
          />
        </div>
        <div className="bg-yellow-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxFour === 2}
            onChange={() => handleCheckFour(2)}
          />
        </div>
        <div className="bg-red-500 h-6 w-7">
          <input
            type="checkbox"
            className="scale-125"
            checked={checkedBoxFour === 3}
            onChange={() => handleCheckFour(3)}
          />
        </div>
        <label className="ml-1">Rotor / Drum</label>
      </div>

      <div>
        <label>Tire Pressure</label>
        <br />
        <label>Before </label>
        <input type="text" className="border w-10 mr-2" />
        <label>After </label>
        <input type="text" className="border w-10" />
      </div>
    </div>
  );
}
