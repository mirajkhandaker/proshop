import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = ({match}) => {

    const [product,setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios(`/api/products/${match.params.id}`);
            setProduct(data);
        }
        fetchProduct();
    },[match]);

    // const product = products.find((p) => p._id === match.params.id);
    return (
        <React.Fragment>
            <Link to='/' className='btn btn-outline-dark'>Back</Link>
            <Row className='mt-2'>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating text={`${product.numReviews} reviews`} value={product.rating} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p className='text-justify'>Description: {product.description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price</Col>
                                <Col>${product.price}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status</Col>
                                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                               Add To Cart
                           </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ProductScreen;