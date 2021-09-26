import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Worker from '../Worker/Worker';
import './Workers.css';

const Workers = () => {
    const [workers,setWorkers]=useState([]);
    const [personCart,setPersonCart]=useState([]);

    useEffect(() => {
        fetch('./workers.JSON')
            .then(res => res.json())
            .then(data => setWorkers(data));
    }, []);
    const handleAddPersonToCart = (person) => {
        const newPersonCart = [...personCart, person];
        setPersonCart(newPersonCart);
    } 
    return (
        <div className='workers-container'>
            <div className='person-container'>
            {
                workers.map(worker=><Worker key={worker._id} worker={worker} handleAddPersonToCart={handleAddPersonToCart}
                >
                </Worker>)
            }
            </div>
            <Cart personCart={personCart}></Cart>
        </div>
    );
};

export default Workers;