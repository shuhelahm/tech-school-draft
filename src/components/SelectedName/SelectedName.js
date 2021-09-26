import React from 'react';
import './SelectedName.css'

const Selected = (props) => {
    return (
        <div className='selectedName'>
                <h3>{props.name}</h3>
        </div>
    );
};

export default Selected;