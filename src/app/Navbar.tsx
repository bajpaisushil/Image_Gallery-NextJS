"use client";

import Link from "next/link";
import {usePathname} from 'next/navigation';
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function NavBar(){
    const pathname=usePathname();
    return(
        <Navbar bg="primary" variant="dark" sticky="top" expand='sm' collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">NextJS Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} active={pathname==="/static"} href="/static">Static</Nav.Link>
                        <Nav.Link as={Link} active={pathname==="/dynamic"} href="/dynamic">Dynamic</Nav.Link>
                        <Nav.Link as={Link} active={pathname==="/isr"} href="/isr">Isr</Nav.Link>
                        <NavDropdown title='Topics' id="topics-dropdown">
                            <NavDropdown.Item as={Link} href="/topics/health">Health</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/fitness">Fitness</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/coding">Coding</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} active={pathname==="/search"} href="/search">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}