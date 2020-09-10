import React, { useState, useEffect } from "react";
import './index.css';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import MailAlert from "./MailAlert";
import { validateMail, validateForm, throwMailError, submitForm } from './api.js'

function Form({ formId }) {
    // Without initiating states for input values with empty string "", inital value would be 'undefined'
    // and that would cause enableSubmit() function to not work properly
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Submit Button will be disabled until all form inputs are filled and mail format correctly validated
    const [submitDisabled, setSubmitDisabled] = useState("true");
    // Mail Alert is enabled when user inputs mail that is already in the database
    const [mailAlertDisabled, setMailAlertDisabled] = useState("true");

    useEffect(() => {
        // Update the button availability based on input values in form
        //
        // Conditions for enabling Submit button
        // - No input field can be empty
        // - Mail address format must be correct
        validateForm(firstName, lastName, email, password) ? setSubmitDisabled("false") : setSubmitDisabled("true")
      });


    const submitData = async (e) => {
        e.preventDefault();
        setMailAlertDisabled("true");

        // Validate asynchronously whether email already exists in the database
        if (await validateMail(email)) {
            // If response is 'OK' -> Submit the form
            const formResp = await submitForm(firstName, lastName, email, password);

            return formResp;
        } else {
            // If email already exists -> Prompt user to choose another one
            setMailAlertDisabled("false");
        }
    }

    return (
        <form id={ formId } onSubmit={submitData}>
            <Input type="text" name="firstName" label="First Name" value={firstName} onChange={setFirstName}/>
            <Input type="text" name="lastName" label="Last Name" value={lastName} onChange={setLastName}/>
            <Input type="email" name="email" label="Email" value={email} onChange={setEmail}/>
            <Input type="password" name="password" label="Password" value={password} onChange={setPassword}/>

            <SubmitButton id="raisely-form-submit" disabled={submitDisabled} />

            <MailAlert id="raisely-mail-alert" mail={email} disabled={mailAlertDisabled} />
        </form>
    )
}

export default Form;