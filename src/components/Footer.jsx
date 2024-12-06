import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 text-center">
      <a
        className="underline inline-flex items-center"
        href="https://github.com/zokirovjasur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="mr-2 text-3xl" />
      </a>
    </footer>
  );
}
