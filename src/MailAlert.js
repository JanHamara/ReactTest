import React from "react";
import './index.css';
import UseAnimations from 'react-useanimations';
import alertCircle from 'react-useanimations/lib/alertCircle'

function MailAlert({id, mail, disabled, disableMailAlert}) {
    return (
        <div 
            id={id} 
            className={
                disabled ? "form-alert" : "form-alert alert-enabled"
            }
        >
            <div className="alert-icon"> 
                <UseAnimations animation={alertCircle} strokeColor="rgb(95, 64, 210)" />
            </div>

            <h1 className="alert-text-header">
                Oops!
            </h1>

            <p className="alert-text">
                It seems like the email address you provided <br/>has been already registered!
            </p>

            <div className="alert-mail">{mail}</div>

            <div className="alert-button" onClick={disableMailAlert}>
                Use a different email address
            </div>
        </div>
    )
}

export default MailAlert;
