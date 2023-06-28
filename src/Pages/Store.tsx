import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { StoreItems } from '../Components/StoreItems';

import products from '../Data/productData.json';

export function Store() {
    return (
        <React.Fragment>
            <h1>Store</h1>
            <Row lg={3} md={2} xs={1} className='g-3'>
                {products.map(product => (
                    <Col key={product.id}>
                        <StoreItems {...product} />
                    </Col>
                ))
                }
            </Row>
        </React.Fragment>
    )
}