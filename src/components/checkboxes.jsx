import { useState } from "react";

export default function CheckBoxes({ item }) {
  const [checkedBox, setCheckedBox] = useState(null);

  const handleCheck = (index) => {
    setCheckedBox(index === checkedBox ? null : index);
  };

  return (
    <div className="flex border border-black w-full">
      <div className="bg-green-500 h-full w-8 p-1 justify-center flex">
        <input
          type="checkbox"
          className="scale-150"
          checked={checkedBox === 1}
          onChange={() => handleCheck(1)}
        />
      </div>
      <div className="bg-yellow-500 h-full w-8 p-1 flex justify-center">
        <input
          type="checkbox"
          className="scale-150"
          checked={checkedBox === 2}
          onChange={() => handleCheck(2)}
        />
      </div>
      <div className="bg-red-500 h-full w-8 p-1 flex justify-center">
        <input
          type="checkbox"
          className="scale-150"
          checked={checkedBox === 3}
          onChange={() => handleCheck(3)}
        />
      </div>
      <label className="text-left w-full pl-1 my-auto">{item}</label>
    </div>
  );
}
