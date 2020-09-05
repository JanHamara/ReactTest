import React, {useState} from "react";
import './index.css';

function Input({type, name, label}) {
    const [inputStatus, setInputStatus] = useState("inactive");

    return (
        <div
            type={type}
            label={label}
            className={
                inputStatus === "active" ? 'raisely-text-input active-input' : 'raisely-text-input'
            }
        >
            <label className="raisely-label" for={name}>{label}</label>
            <input
                type={type}
                label={name}
                name={name}
                id={name}
                onFocus={() => setInputStatus("active")}
                onBlur={() => setInputStatus("inactive")}
                autocomplete={
                    {name} === "password" ? "new-password" : "false"
                }
            />
        </div>
    )
}

export default Input;
