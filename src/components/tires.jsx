export default function TiresAndBrakes() {
  const quadrants = ["Left Front", "Right Front", "Left Rear", "Right Rear"];

  return (
    <div className="w-[70rem] border">
      <span className="bg-black text-white w-full flex justify-center">
        Brakes and Tires
      </span>

      <section className="flex flex-wrap">
        {quadrants.map((wheel) => (
          <div className="border w-full basis-1/2">
            <span className="font-bold">{wheel}</span>
            <div className="flex">
              <div className="bg-green-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
              </div>
              <div className="bg-yellow-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
              </div>
              <div className="bg-red-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
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
                  <option>10</option>
                  
                </select> mm
              </label>
            </div>

            <div className="flex">
              <div className="bg-green-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
              </div>
              <div className="bg-yellow-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
              </div>
              <div className="bg-red-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
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
                  <option>10</option>
                  <option>11</option>
                </select>{" "}
                /32"
              </label>
            </div>

            <div className="flex">
              <div className="bg-green-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
              </div>
              <div className="bg-yellow-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
              </div>
              <div className="bg-red-500 h-6 w-7">
                <input type="checkbox" className="scale-125" />
              </div>
              <label className="ml-1">
                Wear Pattern
                <select className="border ml-2">
                  <option>Even</option>
                  <option>Toe</option>
                  <option>Camber</option>
                </select>
              </label>
            </div>

            <div>
              <label>Tire Pressure: PSI / BAR</label>
              <br />
              <label>Before: </label>
              <input type="text" className="border w-10 mr-2" />
              <label>After: </label>
              <input type="text" className="border w-10" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
