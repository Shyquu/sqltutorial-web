import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDark() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">SQL Tutorial 🦅</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-lessons"
                            title="Lektionen"
                            menuVariant="dark">
                            <NavDropdown.Item href="lesson?no=1">Lektion 1</NavDropdown.Item>
                            <NavDropdown.Item href="lesson?no=2">Lektion 2</NavDropdown.Item>
                            <NavDropdown.Item href="lesson?no=3">Lektion 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="lessons">Lektionen-Übersicht</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            id="nav-dropdown-tasks"
                            title="Übungen"
                            menuVariant="dark">
                            <NavDropdown.Item href="task?no=1">Übung 1</NavDropdown.Item>
                            <NavDropdown.Item href="task?no=2">Übung 2</NavDropdown.Item>
                            <NavDropdown.Item href="task?no=3">Übung 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="tasks">Übungen-Übersicht</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            id="nav-dropdown-utils"
                            title="Utils"
                            menuVariant="dark">
                            <NavDropdown.Item href="addtask">Übung hinzufügen</NavDropdown.Item>
                            <NavDropdown.Item href="addlection">Lektion hinzufügen</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="tasks">Übungen-Übersicht</NavDropdown.Item>
                            <NavDropdown.Item href="lessons">Lektionen-Übersicht</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarDark;