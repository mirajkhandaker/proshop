import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import Rating from "../components/Rating";
import {useDispatch, useSelector} from "react-redux";
import {listProductDetails} from "../actions/productActions";
import Loder from "../components/Loder";
import Message from "../components/Message";

const ProductScreen = ({match}) => {
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails)

    const {loading,error,product} = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    },[dispatch,match]);

    // const product = products.find((p) => p._id === match.params.id);
    return (
        <React.Fragment>
            <Link to='/' className='btn btn-outline-dark'>Back</Link>
            {
                loading ? (<Loder />)
                    : error ? (<Message varient={'danger'}>{error}</Message>)
                    :  <Row className='mt-2'>
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
            }

        </React.Fragment>
    )
}

export default ProductScreen;