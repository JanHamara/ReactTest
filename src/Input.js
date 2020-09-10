import React, {useState, useEffect} from "react";
import './index.css';
import { validateMailFormat } from './api.js'

function Input({type, name, label, value, onChange}) {
    const [inputStatus, setInputStatus] = useState("inactive");
    const [inputEmpty, setInputEmpty] = useState("false");
    const [mailFormatValidated, setMailFormatValidated] = useState("true");

    const inputExitCheck = (value, type) => {
        // Set input status to inactive
        setInputStatus("inactive");
        // If input field is empty -> setInputEmpty to "true" -> display error indicator
        // If input field is not empty -> run inputCheck()
        value === "" ? setInputEmpty("true") : inputCheck(type, value)
    }

    const inputCheck = (type, value) => {
        // Set inputEmpty state to false
        setInputEmpty("false");
        // If input field is of type "email" -> run validateMailFormat()
        setMailFormatValidated("false");
        type === "email" ? (validateMailFormat(value) ? setMailFormatValidated("true") : setMailFormatValidated("false")) : console.log("");
        console.log(mailFormatValidated);
    }

    return (
        // Input Field Wrapper
        <div
            type={type}
            label={label}
            className={
                inputStatus === "active" ? 'raisely-text-input active-input' : 'raisely-text-input'
            }
        >
            {/* Input Field Label */}
            <label className="raisely-label" htmlFor={name}>{label}</label>

            {/* Input Invalid Message */}
            <div 
                className={
                    // Alert Display Condition
                    inputEmpty === "true" ? 'raisely-invalid-input raisely-invalid' : (type === "email" && mailFormatValidated === "false" ? "raisely-invalid-input raisely-invalid" : "raisely-invalid-input")
                }
            >
                {/* Alert Text */}
                <span className="raisely-invalid-input-text">
                    {(type !== "email") ? "This field is required" : (value === "" ? "This field is required" : (mailFormatValidated === "false" ? "Incorrect email format (e.g. text@text.com)" : "This field is required"))}
                </span>

                {/* Alert Icon */}
                <svg className="raisely-error-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"></path>
                </svg>
            </div>
                        
            {/* Input Field */}
            <input
                type={type}
                label={name}
                name={name}
                autoComplete="off"
                value={value}
                onChange={e => onChange(e.target.value)}
                onFocus={() => setInputStatus("active")}
                onBlur={e => inputExitCheck(e.target.value, type)}
                required
            />
        </div>
    )
}

export default Input;
