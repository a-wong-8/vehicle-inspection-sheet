export default function VehicleInfo() {
  return (
    <form className="border lg:w-[69rem] py-4 lg:mx-auto md:mx-12 mx-10 mt-12 lg:mt-7">
      <div className="flex flex-wrap flex-col text-left lg:flex-nowrap lg:block lg:text-center print:flex-nowrap print:block print:text-center">

        <label className="pl-4">Dealer Name: </label>
        <input
          type="text"
          className="lg:w-96 print:w-96 my-2 border-black border rounded"
        />

        <label className="pl-4">Technician: </label>
        <input type="text" className="my-2 border border-black rounded" />
        <br />

        <label className="pl-4">Customer Name: </label>
        <input
          type="text"
          className="lg:w-96 my-2 border border-black rounded"
        />

        <label className="pl-4">Yr/Make/Model: </label>
        <input type="text" className="my-2 border border-black rounded" />

        <br />
        <label className="pl-4">Mileage: </label>
        <input type="text" className="w-20 my-2 border border-black rounded" />

        <label className="pl-4">VIN: </label>
        <input type="text" className="w-52 my-2 border border-black rounded" />

        <label className="pl-4">Hat/Tag: </label>
        <input type="text" className="w-16 my-2 border border-black rounded" />

        <label className="pl-4">Repair Order: </label>
        <input
          type="text"
          id="ro"
          className="w-28 my-2 border border-black rounded"
        />
      </div>
    </form>
  );
}
