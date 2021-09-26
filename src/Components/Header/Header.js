import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>'JETIT' CORPORATION</h1>
            <h3>Welcome to the <span  className='welcome'>'JETIT'</span>. Here we will assign some skillful workers for the company.</h3>
            <h2>Total Budget : <span>20</span> K</h2>
            <h3>Total requested workers: <span>12</span></h3>
            <h4>Please try to take workers around the budget</h4>
        </div>
    );
};

export default Header;