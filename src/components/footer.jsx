import awr from "../images/awr-footer.png";

export default function Footer() {
  return (
    <footer className="flex border-t p-1 justify-center">
      <a href="mailto:awrautogroup@gmail.com">
        <img src={awr} alt="awr logo" className="h-4" />
      </a>
    </footer>
  );
}
