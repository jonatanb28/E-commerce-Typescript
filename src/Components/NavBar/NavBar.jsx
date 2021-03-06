import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Badge, Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

type Props = {
  handleOpen: (state: boolean) => void
}

const NavBar = ({ handleOpen }: Props) => {
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
                <FontAwesomeIcon 
                icon={faShoppingCart}
                color='black'
                size='lg'
                style={{cursor: 'pointer'}}
                onClick={() => handleOpen(true)} />
                <Badge bg='dark'>0</Badge>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar
