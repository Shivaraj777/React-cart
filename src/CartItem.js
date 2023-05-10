// This file contains the the code for Cart Item component

import React from 'react';
import add from './images/add.png';
import minus from './images/minus.png';
import deleteIcon from './images/delete.png';

const CartItem = (props) => {
    // using destructuring to get the properties from state
    const {title, price, qty} = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem} = props;

    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image}alt='product' src={product.img} />
            </div>
            <div className='right-block'>
                <div style={{fontSize: 25}}> {title} </div>
                <div style={{color: '#777'}}>Rs {price} </div>
                <div style={{color: '#777'}}>Qty: {qty} </div>
                <div className='cart-item-actions'>
                    <img className='action-icons' alt='increase' src={add} onClick={() => {onIncreaseQuantity(product)}} />
                    <img className='action-icons' alt='decrease' src={minus} onClick={() => {onDecreaseQuantity(product)}} />
                    <img className='action-icons' alt='delete' src={deleteIcon} onClick={() => {onDeleteItem(product.id)}} />
                </div>
            </div>
        </div>
    );
}

// adding styles to JSX using javascript object
const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;