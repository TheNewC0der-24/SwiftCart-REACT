import React from "react";
import { useParams } from "react-router-dom";
import products from '../Data/productData.json';

export function ProductDetails() {

    const { id } = useParams();
    // Find the item with matching ID from the data
    const product = products.find((item) => item.id === parseInt(id as string));

    return (
        <React.Fragment>
            <h1>Product Details</h1>
            {
                product && (
                    <div>
                        <p>{product.id}</p>
                        <p>{product.title}</p>
                    </div>
                )
            }

        </React.Fragment>
    )
}