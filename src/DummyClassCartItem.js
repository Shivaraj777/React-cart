// This file contains the the code for Cart Item component

import React from 'react';
import add from './images/add.png';
import minus from './images/minus.png';
import deleteIcon from './images/delete.png';

// CartItem class is a component which extends the propert Component from React library
class CartItem extends React.Component{

    // function to increase the quantity of item when clicked on increase button
    // increaseQuantity = () => {
    //     // console.log(this.state);

    //     // incrementing the qty by using setState() method inherited from Component
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     //setState case:2 - if previous state required use this
    //     this.setState((prevState) => {  
    //         return {
    //             qty: prevState.qty + 1   //prevState -> defines the previous values of state object
    //         }
    //     }, () => {
    //         console.log(this.state);
    //     });
    // }

    //to render JSX in class we use render() function
    render(){
        // using destructuring to get the properties from state
        const {title, price, qty} = this.props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem} = this.props;

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
                        <img className='action-icons' alt='increase' src={add} onClick={() => {onIncreaseQuantity(product)}} />
                        <img className='action-icons' alt='decrease' src={minus} onClick={() => {onDecreaseQuantity(product)}} />
                        <img className='action-icons' alt='delete' src={deleteIcon} onClick={() => {onDeleteItem(product.id)}} />
                    </div>
                </div>
            </div>
        );
    }
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