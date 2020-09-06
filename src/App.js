import React from 'react';
import logo from './logo.png';
import './App.css';
import Form from './Form';

function SignupForm() {

    return (
        <div id="raisely-signup-form">
            {/* Raisely Logo */}
            <img src={logo} id="raisely-logo" alt="logo" />

            {/* Sign up Form - Call to Action - Heading */}
            <h1 className="raisely-form-heading">Login to Raisely</h1>

            <Form formId="raisely-form" />

        </div>
    );
}

export default SignupForm;
