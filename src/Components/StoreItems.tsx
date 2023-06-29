import { Link } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import styles from '../Styles/StoreItems.module.css';

import { formatCurrency } from "../Utilities/formatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

type StoreItemsProps = {
    id: number,
    image: string,
    title: string,
    category: string,
    price: number
}

export function StoreItems({ id, image, title, price }: StoreItemsProps) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100 shadow-sm border-0" key={id}>
            <div className={styles.cardImg}>
                <Card.Img variant='top' className={styles.img} src={image} />
            </div>
            <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <Link to={`/store/product/${id}`} className="text-decoration-none fs-5">{title}</Link>
                    <Card.Text className="ms-5 text-muted">{formatCurrency(price)}</Card.Text>
                </div>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button variant="dark" className="w-100" onClick={() => increaseCartQuantity(id)}>
                            <i className="fa-solid fa-cart-plus"></i> Add to Cart
                        </Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
                            <div className="d-flex justify-content-center align-items-center" style={{ gap: "0.5rem" }}>
                                <Button variant="danger" onClick={() => decreaseCartQuantity(id)}>
                                    <i className="fa-solid fa-minus"></i>
                                </Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button variant="success" onClick={() => increaseCartQuantity(id)}>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                            <Button variant="warning" onClick={() => removeFromCart(id)}>
                                <i className="fa-solid fa-trash"></i> Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}