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

    // add to cart btn function
    const handleAddToCart = (employee) =>{
         const newCart = [...cart, employee];
         setCart(newCart);
    }

    return (
        // full emloyee section
        <div className='committe'>
            <div className='employee-container'>
                {
                employees.map(employee=><Employee 
                    key={employee.name} 
                    employee={employee}
                    handleAddToCart={handleAddToCart}>   
                    </Employee>)
            }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Committe;