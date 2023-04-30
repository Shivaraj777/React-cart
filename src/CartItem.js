// This file contains the the code for Cart Item component

import React from 'react';

// CartItem class is a component which extends the propert Component from React library
class CartItem extends React.Component{
    //to render JSX in class we use render() function
    render(){
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 30}}>Phone</div>
                    <div style={{color: '#777'}}>Rs 9999</div>
                    <div style={{color: '#777'}}>Qty: 1</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

// adding styles to JSX using javascript object
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;