import React from "react";
import './index.css';

function SubmitButton({id, disabled}) {

    return (
        <button
            id={id}
            type="submit"
            className={
                disabled === "true" ? "raisely-button-disabled" : ""
            }
        >
            Sign Up
        </button>
    )
}

export default SubmitButton;
