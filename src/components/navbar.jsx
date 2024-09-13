import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Navbar() {
  const date = new Date().toLocaleDateString();

  function print() {
    window.print();
  }

  const save = () => {
    const input = document.querySelector('body'); 
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${repairOrder}-sheet-${date}.pdf`); 
      window.alert(`Saved to PDF as '${repairOrder}-sheet-${date}.pdf'`)
    });
  };

  const repairOrder = document.querySelector('#ro');

  return (
    <nav className="border-b flex justify-between">
      <span className="ml-5 p-1">{date}</span>
      <span className="mr-5 p-1">
        <a href="#" onClick={print}>
          Print・
        </a>
        <a href="#" onClick={save}>
          Save・
        </a>
        <a href="#">Send</a>
      </span>
    </nav>
  );
}
