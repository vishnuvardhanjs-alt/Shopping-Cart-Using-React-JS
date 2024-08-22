import React, { useReducer } from 'react';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import './App.css';


const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

function App() {
    const [cart, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <ProductPage dispatch={dispatch} />
            <CheckoutPage cart={cart} dispatch={dispatch} />
        </div>
    );
}

export default App;
