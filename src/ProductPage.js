import React from 'react';

const products = [
    { id: 1, name: 'Vacuum Cleaner', price: 3599 },
    { id: 2, name: 'Microwave', price: 6999 },
    { id: 3, name: 'Toaster', price: 1999 },
    { id: 4, name: 'Mixer', price: 1799 },
    { id: 5, name: 'Grinder', price: 2599 },
];

function ProductPage({ dispatch }) {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ₹{product.price}
                        <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductPage;
