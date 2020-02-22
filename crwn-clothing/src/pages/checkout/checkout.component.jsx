import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div class='checkout-header'>
            <div className='hedaer-blocks'>
                <span>Product</span>
            </div>
            <div className='hedaer-blocks'>
                <span>Description</span>
            </div>
            <div className='hedaer-blocks'>
                <span>Quantity</span>
            </div>
            <div className='hedaer-blocks'>
                <span>Price</span>
            </div>
            <div className='hedaer-blocks'>
                <span>Remove</span>
            </div>                                
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id}cartItem={cartItem}/>
        ))}
        <div className='total'>
            <span>TOTAL ${total}</span>
        </div>
        <div className='test-warning'>
                Please Use the Following test credit card for payments
                <br/>
                4242 4242 4242 4242 - Exp Any Future Dat - CVV Any 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);