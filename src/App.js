import Cart from './Cart';
import Navbar from './Navbar';

//the main Cart app component
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />       {/* Adding the Cart component to the DOM */}
    </div>
  );
}

export default App;
