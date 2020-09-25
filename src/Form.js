import React, { useState, useEffect } from "react";
import './index.css';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import MailAlert from "./MailAlert";
import SuccessAlert from "./SuccessAlert";
import { validateMail, submitForm } from './api.js'
import { validateForm } from './utils.js'

function Form({ formId }) {

    // ---------------------------------------------------------------------------------------------------

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Submit Button will be disabled until all form inputs are filled and mail format correctly validated
    const [submitDisabled, setSubmitDisabled] = useState(true);

    // Form is disabled when Mail Alert or Success Message after form submission is displayed
    const [formDisabled, setFormDisabled] = useState(false);

    // Mail Alert is enabled when user inputs mail that is already in the database
    const [mailAlertDisabled, setMailAlertDisabled] = useState(true);

    // Success Alert is enabled when user successfully signs up
    const [successAlertDisabled, setSuccessAlertDisabled] = useState(true);

    // ---------------------------------------------------------------------------------------------------

    useEffect(() => {
        validateForm(firstName, lastName, email, password) ? setSubmitDisabled(false) : setSubmitDisabled(true)
    }, [firstName, lastName, email, password]);

    // ---------------------------------------------------------------------------------------------------

    const disableMailAlert = () => {
        setMailAlertDisabled(true);
        setFormDisabled(false);
    }

    const enableMailAlert = () => {
        setFormDisabled(true);
        setMailAlertDisabled(false);
    }

    const disableSuccessAlert = () => {
        setSuccessAlertDisabled(true);
        setFormDisabled(false);
    }

    const enableSuccessAlert = () => {
        setFormDisabled(true);
        setSuccessAlertDisabled(false);
    }

    // ---------------------------------------------------------------------------------------------------

    const submitData = async (e) => {
        e.preventDefault();
        setMailAlertDisabled(true);
        if (await validateMail(email)) {
            const formResp = await submitForm(firstName, lastName, email, password);
            formResp ? enableSuccessAlert() : enableMailAlert()
        } else {
            enableMailAlert()
        }
    }

    // ---------------------------------------------------------------------------------------------------

    return (
        <div className="raisely-container">
            <form 
                id={ formId } 
                onSubmit={submitData}
                className={
                    formDisabled ? "raisely-form-disabled" : ""
                }
                data-testid="form"
            >

                <h1 className="raisely-form-heading">Login to Raisely</h1>

                <Input type="text" name="firstName" label="First Name" value={firstName} onChange={setFirstName}/>
                <Input type="text" name="lastName" label="Last Name" value={lastName} onChange={setLastName}/>
                <Input type="email" name="email" label="Email" value={email} onChange={setEmail}/>
                <Input type="password" name="password" label="Password" value={password} onChange={setPassword}/>

                <SubmitButton id="raisely-form-submit" disabled={submitDisabled} />
            </form>

            <MailAlert mail={email} disabled={mailAlertDisabled} disableMailAlert={disableMailAlert} />

            <SuccessAlert mail={email} disabled={successAlertDisabled} disableSuccessAlert={disableSuccessAlert} />
        </div>
    )
}

export default Form;