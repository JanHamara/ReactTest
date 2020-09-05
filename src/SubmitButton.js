import React from "react";
import './index.css';

function SubmitButton({buttonId}) {
    return (
        <button
            type="submit"
            className="raisely-submit-button"
            id={buttonId}
            onClick="submitForm()"
        >
            Sign Up
        </button>
    )
}

export default SubmitButton;
