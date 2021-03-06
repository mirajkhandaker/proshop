import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import Product from "../components/Product";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";
import Loder from "../components/Loder";
import Message from "../components/Message";


const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)

    const {loading,error,products} = productList;

    useEffect(() => {

        const fetchProducts = async () => {
            const {data} = await axios('/api/products');
            setProducts(data);
            console.log(data);
        }
        fetchProducts();

        dispatch(listProducts());
    },[dispatch]);

    return (
        <>
            {
                loading ? (<Loder />)
                    : error ? (<Message varient={'danger'}>{error}</Message>)
                    : <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))}
                    </Row>
            }
        </>
    );
}

export default HomeScreen;