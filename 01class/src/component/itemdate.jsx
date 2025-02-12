import './itemdate.css';
import React from 'react';

function ItemDate({ date }) {
    const { day, month, year } = date;
    return (
        <div className='itemdate'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    );
}

export default ItemDate;