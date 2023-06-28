import { Link } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import styles from '../Styles/StoreItems.module.css';
import { formatCurrency } from "../Utilities/formatCurrency";

type StoreItemsProps = {
    id: number,
    image: string,
    title: string,
    category: string,
    price: number
}

export function StoreItems({ id, image, title, price }: StoreItemsProps) {

    const quantity = 0;

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
                        <Button variant="dark" className="w-100">Add to Cart</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
                            <div className="d-flex justify-content-center align-items-center" style={{ gap: "0.5rem" }}>
                                <Button variant="danger">-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button variant="success">
                                    +
                                </Button>
                            </div>
                            <Button variant="warning">Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}