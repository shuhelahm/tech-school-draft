import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const employee of cart){
        total = total + employee.payment;
    }

    return (
        <div>
            <h2>Employee amount: {cart.length}</h2>
            <h3>Total cost: {total}</h3>
            <h4>Emloyee name: </h4>
        </div>
    );
};

export default Cart;