import React, { useState, useEffect } from "react";
import './index.css';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import MailAlert from "./MailAlert";
import SuccessAlert from "./SuccessAlert";
import { validateMail, validateForm, submitForm } from './api.js'

function Form({ formId }) {

    // ---------------------------------------------------------------------------------------------------

    // Without initiating states for input values with empty string "", inital value would be 'undefined'
    // and that would cause enableSubmit() function to not work properly
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Component Visibility States

    // Submit Button will be disabled until all form inputs are filled and mail format correctly validated
    const [submitDisabled, setSubmitDisabled] = useState("true");

    // Form is disabled when Mail Alert or success message after form submission is displayed
    const [formDisabled, setFormDisabled] = useState("false");

    // Mail Alert is enabled when user inputs mail that is already in the database
    const [mailAlertDisabled, setMailAlertDisabled] = useState("true");

    // Success Alert is enabled when user successfully signs up
    const [successAlertDisabled, setSuccessAlertDisabled] = useState("true");

    // ---------------------------------------------------------------------------------------------------

    useEffect(() => {
        // Update the button availability based on input values in form
        //
        // Conditions for enabling Submit button
        // - No input field can be empty
        // - Mail address format must be correct
        validateForm(firstName, lastName, email, password) ? setSubmitDisabled("false") : setSubmitDisabled("true")
    }, [firstName, lastName, email, password]);

    // ---------------------------------------------------------------------------------------------------

    // Disable Mail Alert - disableMailAlert()
    const disableMailAlert = () => {
        // Hide Mail Alert
        setMailAlertDisabled("true");
        // Show Form
        setFormDisabled("false");
    }

    // Enable Mail Alert - enableMailAlert()
    const enableMailAlert = () => {
        // Hide Form
        setFormDisabled("true");
        // Show Mail Alert
        setMailAlertDisabled("false");
    }

    // ---------------------------------------------------------------------------------------------------

    // Disable Success Alert - disableMailAlert()
    const disableSuccessAlert = () => {
        // Hide Mail Alert
        setSuccessAlertDisabled("true");
        // Show Form
        setFormDisabled("false");
    }

    // Enable Success Alert - enableMailAlert()
    const enableSuccessAlert = () => {
        // Hide Form
        setFormDisabled("true");
        // Show Mail Alert
        setSuccessAlertDisabled("false");
    }

    // ---------------------------------------------------------------------------------------------------

    // Submit Form - submitData()

    const submitData = async (e) => {
        e.preventDefault();

        setMailAlertDisabled("true");

        // Validate asynchronously whether email already exists in the database [but only works for test@test.com]
        if (await validateMail(email)) {
            // If response is 'OK' -> Submit the form
            const formResp = await submitForm(firstName, lastName, email, password);
            // Validation for existing mails other than test@test.com
            return formResp === false ? enableMailAlert() : enableSuccessAlert()
        } else {
            // If email already exists -> Prompt user to choose another one
            setFormDisabled("true");
            setMailAlertDisabled("false");
        }
    }

    // ---------------------------------------------------------------------------------------------------

    return (
        <div className="raisely-container">
            {/* Sign Up Form */}
            <form 
                id={ formId } 
                onSubmit={submitData}
                className={
                    formDisabled === "true" ? "raisely-form-disabled" : "" 
                }
            >

                {/* Sign Up Form - Call to Action - Heading */}
                <h1 className="raisely-form-heading">Login to Raisely</h1>

                {/* Sign Up Form - Inputs */}
                <Input type="text" name="firstName" label="First Name" value={firstName} onChange={setFirstName}/>
                <Input type="text" name="lastName" label="Last Name" value={lastName} onChange={setLastName}/>
                <Input type="email" name="email" label="Email" value={email} onChange={setEmail}/>
                <Input type="password" name="password" label="Password" value={password} onChange={setPassword}/>

                {/* Sign Up Form - Submit Button */}
                <SubmitButton id="raisely-form-submit" disabled={submitDisabled} />
            </form>

            {/* Sign Up Form - Mail Alert */}
            <MailAlert mail={email} disabled={mailAlertDisabled} disableMailAlert={disableMailAlert} />

            {/* Sign Up Form - Success Alert */}
            <SuccessAlert mail={email} disabled={successAlertDisabled} disableSuccessAlert={disableSuccessAlert} />
        </div>
    )
}

export default Form;