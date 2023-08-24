import React from 'react'
import CartItem from './CartItem'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../../../styles/shopping-cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'
function Cart() {
    const dispatch = useDispatch()
    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    const cartProducts = useSelector(state => state.cart.cartItems)
    console.log(">>>>>>cart",cartProducts);
    return (
        <div className='cart__container'>
            <ListGroup className='cart'>
                <div className="cart__close " onClick={toggleCart}>
                    <span><i className='ri-close-fill'></i>
                    </span>
                </div>


                <div className='cart__item-list'>
                    {cartProducts.length === 0 ? (<h6 className='text-center mt-5'>
                        No item add to the cart
                    </h6>) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )}


                </div>
                <div className="cart__bottom d-flex justify-content-between align-items-center">
                    <h6 >Subtotal amount:<span>{ cartProducts.totalPrice}</span></h6>
                    <button>
                        <Link to="/checkout"> Check out</Link>
                    </button>
                </div>
            </ListGroup>
        </div>
    )
}

export default Cart