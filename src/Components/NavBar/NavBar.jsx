import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className='navbar-brand' to='/'>Ecommerce</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='nav-link' to='/'>Home</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar
