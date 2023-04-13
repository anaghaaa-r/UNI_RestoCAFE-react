import React from 'react';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function NavigationBar() {
    return (
        <div>
            <Navbar className='mx-4'>
                    <Navbar.Brand href="#home">UNI Resto Cafe</Navbar.Brand>
                    <Navbar.Toggle />
                        <Nav className="ms-auto">
                            <Nav.Link href='#'>My Orders</Nav.Link>
                            <Nav.Link href='#'>
                                <FaShoppingCart /><Badge pill bg="danger">0</Badge>
                            </Nav.Link>
                        </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar