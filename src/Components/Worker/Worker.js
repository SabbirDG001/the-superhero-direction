import React from 'react';
import './Worker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-solid-svg-icons';


const Worker = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    const{name,age,picture,gender,balance,phone}=props.worker;
    return (
        <div>
           <div className="card person">
  <img src={picture} className="card-img-top rounded image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name:{name}</h5>
    <h5 className="card-title">Age:{age}</h5>
    <h5 className="card-title">Gender:{gender}</h5>
    <h5 className="card-title">Balance:{balance}</h5>
    <h5 className="card-title">Phone:{phone}</h5>
    <button onClick={() => props.handleAddPersonToCart(props.worker)}>{element} Add</button>
  </div>
</div>
        </div>
    );
};

export default Worker;