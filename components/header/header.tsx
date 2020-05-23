import { Navbar } from "react-bootstrap";
import { SITE_TITLE } from "../../constants";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Navbar.Brand href="#" className="mx-auto">{SITE_TITLE}</Navbar.Brand>
    </Navbar>
  );
}