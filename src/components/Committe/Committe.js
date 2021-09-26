import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Committe.css';

const Committe = () => {
    const [employees, setEmployees] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./employee.json')
        .then(res=> res.json())
        .then(data=>setEmployees(data))
    },[]);

    const handleAddToCart = (employee) =>{
         const newCart = [...cart, employee];
         setCart(newCart);
    }

    return (
        <div className='committe'>
            <div>
                {
                employees.map(employee=><Employee 
                    key={employee.name} 
                    employee={employee} 
                    handleAddToCart={handleAddToCart}
                   ></Employee>)
            }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Committe;