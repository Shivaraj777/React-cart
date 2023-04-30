import CartItem from './CartItem';

//the main Cart app component
function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      <CartItem/>    {/* Adding the CartItem component to the app */}
    </div>
  );
}

export default App;
