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
            </div>
        );
    }
}

export default App;
