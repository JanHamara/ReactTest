import React from "react";
import './index.css';

function SubmitButton({disabled}) {

    return (
        <button
            id="submit-signup"
            type="submit"
            className={
                disabled === "true" ? "raisely-disabled" : ""
            }
        >
            Sign Up
        </button>
    )
}

export default SubmitButton;
