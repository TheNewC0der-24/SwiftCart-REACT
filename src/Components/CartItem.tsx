import { Button, Stack } from "react-bootstrap";

import { useShoppingCart } from "../Context/ShoppingCartContext";
import { formatCurrency } from "../Utilities/formatCurrency";
import { textTruncate } from "../Utilities/textTruncate";

import products from "../Data/productData.json";

type CartItemProps = {
    id: number;
    quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {

    const { removeFromCart } = useShoppingCart();
    const item = products.find(product => product.id === id);
    if (item == null) return null;

    const truncatedTitle = textTruncate(item.title, 12);

    return (
        <div>
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img src={item.image} alt="product" style={{ width: "50px" }} />
                <div className="me-auto">
                    <div className="fs-5">
                        {truncatedTitle} {quantity > 1 && <span className="text-muted" style={{ fontSize: "0.85rem" }}>x{quantity}</span>}
                    </div>
                    <div className="text-muted">
                        {formatCurrency(item.price)}
                    </div>
                </div>
                <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    <i className="fa-solid fa-xmark"></i>
                </Button>
            </Stack>
            <hr />
        </div>
    )
}