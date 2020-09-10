import React from "react";
import './index.css';

function MailAlert({id, mail, disabled}) {

    return (
        <div 
            id={id} 
            className={
                disabled === "false" ? "mail-alert-enabled" : ""
            }
        >
                Email address <span>{mail}</span> is already in use!
                <br/><br/>
                Please choose another email!
        </div>
    )
}

export default MailAlert;
