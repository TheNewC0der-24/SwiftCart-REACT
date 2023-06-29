import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useShoppingCart } from '../Context/ShoppingCartContext';

export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <NavbarBs.Brand>SwiftCart</NavbarBs.Brand>
                <Nav className='me-auto'>
                    <Nav.Link className="active" to="/store" as={NavLink}>Store</Nav.Link>
                </Nav>
                <Button variant="outline-dark" className='rounded-circle' style={{ position: "relative", width: "3rem", height: "3rem" }} onClick={() => openCart()}>
                    <i className="fa-solid fa-cart-shopping"></i>

                    {cartQuantity > 0 && (
                        <span
                            className="position-absolute rounded-circle bg-secondary"
                            style={{
                                bottom: "0",
                                right: "0",
                                width: "1.5rem",
                                height: "1.5rem",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transform: "translate(25%, 25%)",
                            }}
                        >
                            {cartQuantity}
                        </span>
                    )}
                </Button>
            </Container>
        </NavbarBs >
    )
}