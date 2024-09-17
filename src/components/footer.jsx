import awr from "../images/awr-footer.png";

export default function Footer() {
  return (
    <footer className="flex p-1 justify-center">
      <a href="mailto:awrautogroup@gmail.com">
        <img src={awr} alt="awr auto group logo" className="h-4" />
      </a>
    </footer>
  );
}
