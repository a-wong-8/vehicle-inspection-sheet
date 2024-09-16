// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

export default function Navbar() {
  const date = new Date().toLocaleDateString();

  function print() {
    window.print();
  }

  // const save = () => {
  //   const input = document.querySelector("body");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.save(`${repairOrder}-sheet-${date}.pdf`);
  //     window.alert(`Saved to PDF as '${repairOrder}-sheet-${date}.pdf'`);
  //   });
  // };

  // let repairOrder;
  // if (document.querySelector("#ro").value) {
  //   repairOrder = document.querySelector("#ro").value;
  // }

  const clear = () => {
    if (window.confirm("Clear entire sheet?")) {
      window.location.reload();
    }
  };

  return (
    <nav className="w-full flex justify-between fixed top-0 bg-opacity-70 h-10 bg-black text-white z-10 shadow-lg">
      <span className="ml-2 my-auto p-1">{date}</span>
      <h1 className="font-bold text-lg my-auto">Multi-Point Inspection Sheet</h1>
      <span className="mr-2 p-1 my-auto">
        <button onClick={print}>
          Print・
        </button>
        {/* <a href="#" onClick={save}>
          Save・
        </a> */}
        <button onClick={clear}>
          Clear
        </button>
      </span>
    </nav>
  );
}
