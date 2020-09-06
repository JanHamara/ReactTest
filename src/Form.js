import React, { useState } from "react";
import './index.css';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { validateMail } from './api.js'

function Form({ formId }) {
    const [validated, setValidated] = useState("false");

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const setData = async (e) => {
        e.preventDefault();

        await validateMail(email);

        // submitting data
        alert("submitting");
    }

    return (
        <form id={ formId }>
            <Input type="text" name="firstName" label="First Name" value={firstName} onChange={setFirstName}/>
            <Input type="text" name="lastName" label="Last Name" value={lastName} onChange={setLastName}/>
            <Input type="text" name="email" label="Email" value={email} onChange={setEmail}/>
            <Input type="text" name="password" label="Password" value={password} onChange={setPassword}/>

            <SubmitButton onClick={setData} />
        </form>
    )
}

export default Form;
