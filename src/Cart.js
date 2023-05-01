import React from 'react';
import CartItem from './CartItem';

// creating the Cart component
class Cart extends React.Component{
     //create a state
     constructor(){
        //if we are inheriting properties from parent class, then while calling constructor, we also need to call the constructor of parent class by using super keyword
        super();
        this.state = {
            products: [
                {
                    title: 'Mobile Phone',
                    price: 9999,
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    title: 'Watch',
                    price: 1999,
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    title: 'Speaker',
                    price: 15000,
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    render(){
        //assigning the products array of state by using destructuring
        const {products} = this.state;

        return (
            <div className="cart">
                {/* Using the map function to add the products to CartItem */}
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cart;