import React from 'react';
import ShoppingCart from './images/shopping-cart.png'

function Navbar(){
    return (
        <div style={styles.nav}>
            <div sstyle={styles.cartIconContainer}>
                <img style={styles.cartIcon} alt='basket' src={ShoppingCart} />
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    );
}

//adding styles to navbar JSX using javascript object
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

export default Navbar;