export default function ColorCode() {
  return (
      <div className="flex flex-col lg:w-[69rem] mx-auto">
        <h2 className="font-semibold bg-green-500">Checked and Okay</h2>
        <h2 className="font-semibold bg-yellow-500">
          May need future attention
        </h2>
        <h2 className="font-semibold bg-red-500">
          Requries immediate attention
        </h2>
      </div>
  );
}
