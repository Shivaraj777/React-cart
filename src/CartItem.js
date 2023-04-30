// This file contains the the code for Cart Item component

import React from 'react';
import add from './add.png';
import minus from './minus.png';
import deleteIcon from './delete.png';

// CartItem class is a component which extends the propert Component from React library
class CartItem extends React.Component{
    //create a state
    constructor(){
        //if we are inheriting properties from parent class, then while calling constructor, we also need to call the constructor of parent class by using super keyword
        super();
        this.state ={
            title: 'Phone',
            price: 9999,
            qty: 1,
            img: ''
        }
    }

    //to render JSX in class we use render() function
    render(){
        // using destructuring to get the properties from state
        const {title, price, qty} = this.state;

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}> {title} </div>
                    <div style={{color: '#777'}}>Rs {price} </div>
                    <div style={{color: '#777'}}>Qty: {qty} </div>
                    <div className='cart-item-actions'>
                        <img class='action-icons' alt='increase' src={add} />
                        <img class='action-icons' alt='decrease' src={minus} />
                        <img class='action-icons' alt='delete' src={deleteIcon} />
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