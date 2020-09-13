import React from "react";
import './index.css';
import UseAnimations from 'react-useanimations';
import heart from 'react-useanimations/lib/heart';

function SuccessAlert({mail, disabled, disableSuccessAlert}) {

    return (
        <div 
            className={
                disabled ? "form-alert form-alert-s" : "form-alert form-alert-s alert-enabled"
            }
        >
            <div className="alert-icon"> 
                <UseAnimations animation={heart} strokeColor="rgb(95, 64, 210)" />
            </div>

            <h1 className="alert-text-header">
                Awesome!
            </h1>

            <p className="alert-text">
                You have successfully signed up with <br/> the following email address
            </p>

            <div className="alert-mail">{mail}</div>

            <div className="alert-button" onClick={disableSuccessAlert}>
                Log in
            </div>
        </div>
    )
}

export default SuccessAlert;