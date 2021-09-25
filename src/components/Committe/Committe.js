import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Committe.css';

const Committe = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(()=>{
        fetch('./employee.json')
        .then(res=> res.json())
        .then(data=>setEmployees(data))
    },[])
    return (
        <div className='committe'>
            <div>
                {
                employees.map(employee=><Employee key={employee.key} employee={employee}></Employee>)
            }
            </div>
            <div>
                <h2>this is cart</h2>
            </div>
        </div>
    );
};

export default Committe;