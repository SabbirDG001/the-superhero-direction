import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const { personCart } = props;
    const length = personCart.length;
    const totalReducer = (previous, person) => previous + person.balance;
    const total = personCart.reduce(totalReducer, 0);
    return (
        <div>
            <div className="container">
                <h2>Total added: <span>{length}</span></h2>
                <h2>Total cost: <span>{total}</span></h2>
            </div>
            <div>
                <h3>Added persons:</h3>
                <div>
                    <ul>
                    {
                        personCart.map(props=><li key={props._id}>{props.name}</li>)
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;