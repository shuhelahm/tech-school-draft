import React from 'react';
import Selected from '../SelectedName/SelectedName';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;

    for(const employee of cart){
        total = total + employee.payment;
    }

    return (
        <div className='cart-body'>
            <h2>Employee amount: {cart.length}</h2>
            <h3>Total cost:$ {total}</h3>
            {
                cart.map(selectedName=> <Selected 
                    key={selectedName.name}
                    name={selectedName.name}></Selected>)
            }
        </div>
    );
};

export default Cart;