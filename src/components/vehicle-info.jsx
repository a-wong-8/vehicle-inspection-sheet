export default function VehicleInfo() {
  return (
    <form className="border w-[70rem] py-4 mx-auto">
      <label for="" className="pl-4">
        Dealer Name:{" "}
      </label>
      <input
        type="text"
        id=""
        name=""
        className="w-96 my-2 border-black border"
      />

      <label for="" className="pl-4">
        Technician:{" "}
      </label>
      <input type="text" id="" name="" className=" my-2 border border-black" />
      <br />
      <label for="" className="pl-4">
        Customer Name:{" "}
      </label>
      <input
        type="text"
        id=""
        name=""
        className="w-96 my-2 border border-black"
      />

      <label for="" className="pl-4">
        Yr/Make/Model:{" "}
      </label>
      <input type="text" id="" name="" className=" my-2 border border-black" />

      <br />
      <label for="" className="pl-4">
        Mileage:{" "}
      </label>
      <input
        type="text"
        id=""
        name=""
        className="w-20 my-2 border border-black"
      />

      <label for="" className="pl-4">
        VIN:{" "}
      </label>
      <input
        type="text"
        id=""
        name=""
        className="w-52 my-2 border border-black"
      />

      <label for="" className="pl-4">
        Hat/Tag:{" "}
      </label>
      <input
        type="text"
        id=""
        name=""
        className="w-16 my-2 border border-black"
      />
      <label for="" className="pl-4">
        Repair Order:{" "}
      </label>
      <input
        type="text"
        id="ro"
        name=""
        className="w-28 my-2 border border-black"
      />
    </form>
  );
}
