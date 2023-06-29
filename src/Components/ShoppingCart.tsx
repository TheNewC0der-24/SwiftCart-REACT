import { Offcanvas, Stack } from "react-bootstrap";

import { useShoppingCart } from "../Context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../Utilities/formatCurrency";

import products from "../Data/productData.json";

type ShoppingCartProps = {
    isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

    const { closeCart, cartQuantity, cartItems } = useShoppingCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton style={{ borderBottom: "1px solid #6c757d" }}>
                <Offcanvas.Title><i className="fa-solid fa-cart-flatbed"></i> Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="bg-dark text-white p-2 mb-4">
                    <span>Cart has {cartQuantity} items</span>
                </div>
                <Stack gap={3}>
                    {
                        cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))
                    }
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = products.find(product => product.id === cartItem.id);
                            return total + (item?.price || 0) * cartItem.quantity;
                        }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}