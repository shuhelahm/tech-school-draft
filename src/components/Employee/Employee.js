import React from 'react';
import './Employee.css';

const Employee = (props) => {
    const {name, experience, img, payment, title} = props.employee;
    return (
        <div className='employee'>
            <div>
                <img className='employee-img' src={img} alt="" />
            </div>
            <div>
                <h2>Name: {name}</h2>
                <h3>Title: {title}</h3>
                <h3>Experience: {experience} years</h3>
                <h3>Have to pay: ${payment}/project</h3>
                <button className='add-to-plan-btn'>Add to my plan</button>
            </div>
        </div>
    );
};

export default Employee;