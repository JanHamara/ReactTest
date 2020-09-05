import React, { useState } from "react";
import './index.css';
import Input from "./Input";

function Form({ formId }) {
    const [validated, setValidated] = useState("false");

    return (
        <form id={ formId }>
            <Input type="text" name="firstName" label="First Name" />
            <Input type="text" name="lastName" label="Last Name" />
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
        </form>
    )
}

export default Form;
