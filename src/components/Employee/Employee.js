import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Employee.css';

const Employee = (props) => {
    const {name, experience, img, payment, title} = props.employee;
    return (
        <div className='employee'>
            <div>
            <div>
                <img className='employee-img' src={img} alt="" />
            </div>
            <div>
                <h2>Name: {name}</h2>
                <h3>Title: {title}</h3>
                <h3>Experience: {experience} years</h3>
                <h3>Have to pay: ${payment}/project</h3>
            <button
            onClick={()=>props.handleAddToCart(props.employee)}
             className='add-to-plan-btn'> {<FontAwesomeIcon icon={faShoppingCart} />} Add to my plan</button>
            </div>
            </div>
        </div>
    );
};

export default Employee;