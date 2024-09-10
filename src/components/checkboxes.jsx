export default function CheckBoxes() {
  return (
    <div className="flex border border-black w-64 rounded-md">
      <label className="p-1 mx-auto">Engine Oil</label>
      <div className="bg-green-500 h-full w-8 p-1">
        <input type="checkbox" name="good" for="engine" />
      </div>
      <div className="bg-yellow-500 h-full w-8 p-1">
        <input type="checkbox" name="good" for="engine" />
      </div>
      <div className="bg-red-500 h-full w-8 p-1">
        <input type="checkbox" name="good" for="engine" />
      </div>
    </div>
  );
}
