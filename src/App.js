import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//the main Cart app component
class App extends React.Component {
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
                    img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80',
                    id: 1
                },
                {
                    title: 'Watch',
                    price: 1999,
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
                    id: 2
                },
                {
                    title: 'Speaker',
                    price: 15000,
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1558537348-c0f8e733989d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
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

    //function to get the count of items in the cart
    getCartCount = () => {
        const {products} = this.state;
        let count = 0;

        //looping over each products quantity and getting the count
        products.forEach((product) => {
            count += product.qty;
        });

        return count;
    }

    //function to get the total price of items in cart
    getCartPrice = () => {
        const {products} = this.state;
        let totalPrice = 0;

        products.forEach((product) => {
            totalPrice += product.qty * product.price;
        });

        return totalPrice;
    }

    render(){
        const {products} = this.state;

        return (
            <div className="App">
                <Navbar count={this.getCartCount()} />  {/* passing the count of items to navbar component as props */}
                <Cart
                    products={products} 
                    onIncreaseQuantity={this.handleIncreaseQuantity}  // passing handleIncreaseQuantity as props to CartItem
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteItem={this.handleDeleteItem}
                />                                          {/* Adding the Cart component to the DOM */}
                <div style={{fontSize:20, padding:10}}>
                    TOTAL PRICE: {this.getCartPrice()}
                </div>
            </div>
        );
    }
}

export default App;
