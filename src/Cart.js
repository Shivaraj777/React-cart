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

    //function to increase the quantity when plus button is clicked
    handleIncreaseQuantity = (product) => {
        console.log('Increase the qty for', product);

        const {products} = this.state;
        const productIndex = products.indexOf(product);
        products[productIndex].qty += 1;

        this.setState({
            products: products
        });
    }

    //function to decrease the quantity when minus button is clicked
    handleDecreaseQuantity = (product) => {
        if(product.qty === 0){
            return;
        }

        console.log('Decrease the qty for', product);

        const {products} = this.state;
        const productIndex = products.indexOf(product);
        products[productIndex].qty -= 1;

        this.setState({
            products: products
        });
    }

    //function to delete the cart item when delete button is clicked
    handleDeleteItem = (productId) => {
        //filter out the products which are not deleted
        const {products} = this.state;
        const filteredProducts = products.filter((product) => product.id !== productId);

        //update the products in state object
        this.setState({
            products: filteredProducts
        });
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
                            onIncreaseQuantity={this.handleIncreaseQuantity}  // passing handleIncreaseQuantity as props to CartItem
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteItem={this.handleDeleteItem}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cart;