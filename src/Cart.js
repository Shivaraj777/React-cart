import React from 'react';
import CartItem from './CartItem';

// creating the Cart component
class Cart extends React.Component{

    render(){
        return (
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;