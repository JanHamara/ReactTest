import React, { useState } from "react";
import './index.css';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { validateMail, submitForm } from './api.js'

function Form({ formId }) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [submitDisabled, setSubmitDisabled] = useState("false");

    const submitData = async (e) => {
        e.preventDefault();

        // Validate mail format

        if (await validateMail(email)) {
            alert("Mail was validated");
            const formResp = await submitForm(firstName, lastName, email, password);
            console.log("Form Response: ", formResp);
        } else {
            alert("Mail was NOT validated");
        }
    }

    return (
        <form id={ formId } onSubmit={submitData}>
            <Input type="text" name="firstName" label="First Name" value={firstName} onChange={setFirstName}/>
            <Input type="text" name="lastName" label="Last Name" value={lastName} onChange={setLastName}/>
            <Input type="email" name="email" label="Email" value={email} onChange={setEmail}/>
            <Input type="password" name="password" label="Password" value={password} onChange={setPassword}/>

            <SubmitButton disabled={submitDisabled} />
        </form>
    )
}

export default Form;
