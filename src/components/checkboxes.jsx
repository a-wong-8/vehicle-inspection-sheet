export default function CheckBoxes({ item }) {
  return (
    <div className="flex border border-black w-full rounded-md">
      <div className="bg-green-500 h-full w-8 p-1">
        <input type="checkbox" className="scale-150" />
      </div>
      <div className="bg-yellow-500 h-full w-8 p-1">
        <input type="checkbox" className="scale-150" />
      </div>
      <div className="bg-red-500 h-full w-8 p-1">
        <input type="checkbox" className="scale-150" />
      </div>
      <label className=" mx-auto">{item}</label>
    </div>
  );
}
