import { useParams } from "react-router-dom";
import products from '../Data/productData.json';

import { Button, Col, Container, Row } from "react-bootstrap";
import { formatCurrency } from "../Utilities/formatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";


export function ProductDetails() {

    const { id } = useParams();
    // Find the item with matching ID from the data
    const product = products.find((item) => item.id === parseInt(id as string));

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const quantity = getItemQuantity(product?.id as number);

    return (
        <Container>
            {
                product && (
                    <Row className="g-3 my-5">
                        <Col md={4} className="m-auto">
                            <img src={product.image} alt={product.title} width={300} />
                        </Col>
                        <Col md={8} className="m-auto">
                            <h2>{product.title}</h2>
                            <div className="badge bg-info">{product.category}</div>
                            <p className="mt-3">{product.description}</p>
                            <p>Price: {formatCurrency(product.price)}</p>
                            <p>{product.rating} <i className="fa-solid fa-star text-warning"></i></p>

                            <div className="mt-auto">
                                {quantity === 0 ? (
                                    <Button variant="dark" onClick={() => increaseCartQuantity(product.id)}>
                                        <i className="fa-solid fa-cart-plus"></i> Add to Cart
                                    </Button>
                                ) : (
                                    <div className="d-flex flex-column" style={{ gap: "0.5rem" }}>
                                        <div className="d-flex" style={{ gap: "0.5rem" }}>
                                            <Button variant="danger" onClick={() => decreaseCartQuantity(product.id)}>
                                                <i className="fa-solid fa-minus"></i>
                                            </Button>
                                            <div>
                                                <span className="fs-3">{quantity}</span> in cart
                                            </div>
                                            <Button variant="success" onClick={() => increaseCartQuantity(product.id)}>
                                                <i className="fa-solid fa-plus"></i>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                )
            }

        </Container>
    )
}