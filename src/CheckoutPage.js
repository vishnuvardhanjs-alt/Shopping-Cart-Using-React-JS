import React from 'react';

function CheckoutPage({ cart, dispatch }) {
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <div className="cart-item">
                                    <div className="cart-item-info">
                                        <span className="cart-item-name">{item.name}</span>
                                        <span className="cart-item-price">₹{item.price}</span>
                                        <span className="cart-item-quantity">x {item.quantity}</span>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}>
                                            Remove
                                        </button>
                                        <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}>
                                            +
                                        </button>
                                        <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })} disabled={item.quantity <= 1}>
                                            -
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2>Total Price: ₹{getTotalPrice().toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;
