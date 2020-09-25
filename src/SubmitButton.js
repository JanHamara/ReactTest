import React from "react";
import './index.css';

function SubmitButton({id, disabled}) {
    return (
        <button
            id={id}
            type="submit"
            className={
                disabled ? "raisely-button-disabled" : ""
            }
            disabled={
                disabled ? true : false
            }
        >
            Sign Up
        </button>
    )
}

export default SubmitButton;
