import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = item => {
		let mutatedCart = cart
		if (mutatedCart.filter((el) => el.id === item.id).length > 1) {
			debugger
			
			const oneIndex = mutatedCart.indexOf(item)
			mutatedCart.splice(oneIndex, 1);
				//setCart(mutatedCart)
			debugger
		} else {
			mutatedCart = cart.filter((el) => el.id !== item.id);
		}
		console.log(mutatedCart)
		setCart(mutatedCart)
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem, removeItem}} >
				<CartContext.Provider value={{cart}} >
					<Navigation />
				
				{/* Routes */}
				
					<Route exact path="/" component={Products}/>
				

					<Route path="/cart" component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
