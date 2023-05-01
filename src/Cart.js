import React from 'react';
import CartItem from './CartItem';

// creating the Cart component
const Cart = (props) => {
    //assigning the products array of state by using destructuring
    const {products} = props;

    return (
        <div className="cart">
            {/* Using the map function to add the products to CartItem */}
            {products.map((product) => {
                return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}  // passing handleIncreaseQuantity as props to CartItem
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteItem={props.onDeleteItem}
                    />
                );
            })}
        </div>
    );
}

export default Cart;