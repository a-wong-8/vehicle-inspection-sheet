import awr from "../images/awr-footer.png";

export default function Footer() {
  return (
    <footer className="flex border border-t mt-4 p-1 justify-center">
      <a href="mailto:awrautogroup@gmail.com">
        <img src={awr} className="h-6" />
      </a>
    </footer>
  );
}
