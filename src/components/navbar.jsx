export default function Navbar() {
  const date = new Date().toLocaleDateString();

  return (
    <nav className="border-b">
      <span className=" flex justify-start ml-5 p-1">{date}</span>
    </nav>
  );
}
