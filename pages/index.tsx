import Head from 'next/head';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Торговец Временем</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar bg="light">
        <Navbar.Brand href="#">Торговец Времени</Navbar.Brand>
      </Navbar>
    </div>
  );
}
