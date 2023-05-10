import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {db} from './firebaseInit.js';
import { collection, query, where, getDocs } from "firebase/firestore";

//the main Cart app component
class App extends React.Component {
    //create a state
    constructor(){
        //if we are inheriting properties from parent class, then while calling constructor, we also need to call the constructor of parent class by using super keyword
        super();
        this.state = {
            products: [],
            loading: true
        }
    }

    async componentDidMount(){
        //get the db data from firebase database
        const querySnapshot = await getDocs(collection(db, 'products'));

        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, ': ', doc.data());
        // });

        //add the documents from database to products
        const products = querySnapshot.docs.map((doc) => {
            let data = doc.data();
            data['id'] = doc.id;
            return data;
        });

        console.log(products);

        //change the state(data) for products
        this.setState({
            products
        })
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
            products: filteredProducts,
            loading: false
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
            if(product.qty > 0){
                totalPrice += product.qty * product.price;
            }
        });

        return totalPrice;
    }

    render(){
        const {products, loading} = this.state;

        return (
            <div className="App">
                <Navbar count={this.getCartCount()} />  {/* passing the count of items to navbar component as props */}
                <Cart
                    products={products} 
                    onIncreaseQuantity={this.handleIncreaseQuantity}  // passing handleIncreaseQuantity as props to CartItem
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteItem={this.handleDeleteItem}
                />                                          {/* Adding the Cart component to the DOM */}
                {loading && 'Fetching the data...'}
                <div style={{fontSize:20, padding:10}}>
                    TOTAL PRICE: {this.getCartPrice()}
                </div>
            </div>
        );
    }
}

export default App;
