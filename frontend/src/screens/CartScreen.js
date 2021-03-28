import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cartActions";
import {Row} from "react-bootstrap";

const CartScreen = ({match,location,history}) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    console.log(cartItems)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (productId){
            dispatch(addToCart(productId,qty));
        }
    },{dispatch,productId,qty});
    return(
        <Row>


        </Row>
    );
}

export default CartScreen;