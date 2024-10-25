import { useState } from "react";

export default function CheckBoxes({ item, onColorScore }) {
  const [checkedBox, setCheckedBox] = useState(null);

  const handleCheck = (index, score) => {
    const newChecked = index === checkedBox ? null : index;
    setCheckedBox(newChecked);
    onColorScore(newChecked ? score : 0); // Send score if checked, 0 if unchecked
  };

  return (
    <div className="flex border border-black w-screen sm:w-full print:w-full">
      <div className="bg-green-500 h-full w-8 p-1 justify-center flex">
        <input
          type="checkbox"
          className="scale-150"
          checked={checkedBox === 1}
          onChange={() => handleCheck(1, 1)} // Green = 1
        />
      </div>
      <div className="bg-yellow-500 h-full w-8 p-1 flex justify-center">
        <input
          type="checkbox"
          className="scale-150"
          checked={checkedBox === 2}
          onChange={() => handleCheck(2, 2)}
        />
      </div>
      <div className="bg-red-500 h-full w-8 p-1 flex justify-center">
        <input
          type="checkbox"
          className="scale-150"
          checked={checkedBox === 3}
          onChange={() => handleCheck(3, 3)} // Red = 3
        />
      </div>
      <label className="text-left w-full pl-1 py-[0.1rem] my-auto print:text-sm">
        {item}
      </label>
    </div>
  );
}
