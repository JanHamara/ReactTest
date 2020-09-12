import React from "react";
import './index.css';
import UseAnimations from 'react-useanimations';
import alertCircle from 'react-useanimations/lib/alertCircle'

function MailAlert({id, mail, disabled, disableMailAlert}) {

    return (
        <div 
            id={id} 
            className={
                disabled === "false" ? "form-alert alert-enabled" : "form-alert"
            }
        >
            {/* Alert Sign */}
            <div className="alert-icon"> 
                <UseAnimations animation={alertCircle} strokeColor="rgb(95, 64, 210)" />
            </div>

            {/* Alert Header */}
            <h1 className="alert-text-header">
                Oops!
            </h1>

            {/* Alert Text */}
            <p className="alert-text">
                It seems like the email address you provided <br/>has been already registered!
            </p>

            {/* Alert Mail */}
        <div className="alert-mail">{mail}</div>

            {/* Alert Call-to-Action */}
            <div className="alert-button" onClick={disableMailAlert}>
                - Use a different email address -
            </div>
        </div>
    )
}

export default MailAlert;
