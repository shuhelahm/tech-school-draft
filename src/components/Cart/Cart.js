import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let name = '';
    for(const employee of cart){
        total = total + employee.payment;
        name = name + employee.name;
    }

    return (
        <div className='cart-body'>
            <h2>Employee amount: {cart.length}</h2>
            <h3>Total cost:$ {total}</h3>
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;