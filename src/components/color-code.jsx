export default function ColorCode() {
  return (
    <>
      <div className="flex flex-col w-[70rem] mx-auto">
        <span className="font-semibold bg-green-500">Checked and Okay</span>
        <span className="font-semibold bg-yellow-500">
          May need future attention
        </span>
        <span className="font-semibold bg-red-500">
          Requries immediate attention
        </span>
      </div>
    </>
  );
}
