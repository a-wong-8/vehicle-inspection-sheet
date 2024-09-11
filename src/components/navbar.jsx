export default function Navbar() {
  const date = new Date().toLocaleDateString();

  return (
    <nav className="border-b flex justify-between">
      <span className="ml-5 p-1">{date}</span>
      <span className="mr-5 p-1">Print・Save・Send</span>
    </nav>
  );
}
