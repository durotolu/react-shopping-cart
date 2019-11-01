import React from 'react';

// Components
import Product from './Product';

//
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'

const Products = () => {

	const {products, addItem, removeItem} = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					removeItem={removeItem}
				/>
			))}
		</div>
	);
};

export default Products;
