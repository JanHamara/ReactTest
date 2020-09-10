import React, { useState, useEffect } from "react";
import './index.css';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { validateMail, validateForm, submitForm } from './api.js'

function Form({ formId }) {
    // Without initiating states for input values with empty string "", inital value would be 'undefined'
    // and that would cause enableSubmit() function to not work properly
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //
    const [submitDisabled, setSubmitDisabled] = useState("true");

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

    useEffect(() => {
        // Update the button availability based on input values in form
        //
        // Conditions for enabling Submit button
        // - No input field can be empty
        // - Mail address format must be correct
        validateForm(firstName, lastName, email, password) ? setSubmitDisabled("false") : setSubmitDisabled("true")
      });

    return (
        <form id={ formId } onSubmit={submitData}>
            <Input type="text" name="firstName" label="First Name" value={firstName} onChange={setFirstName}/>
            <Input type="text" name="lastName" label="Last Name" value={lastName} onChange={setLastName}/>
            <Input type="email" name="email" label="Email" value={email} onChange={setEmail}/>
            <Input type="password" name="password" label="Password" value={password} onChange={setPassword}/>

            <SubmitButton id="raisely-form-submit" disabled={submitDisabled} />
        </form>
    )
}

export default Form;
