import React from 'react';
import logo from './assets/logo.png';
import Form from './Form';

function SignupForm() {
    return (
        <div id="raisely-signup-form">
            {/* Raisely Logo */}
            <img src={logo} id="raisely-form-logo" alt="raisely-logo" />

            {/* Sign up Form - Call to Action - Heading */}
            <h1 className="raisely-form-heading">Login to Raisely</h1>

            {/* Sign up Form */}
            <Form formId="raisely-form" />
        </div>
    );
}

export default SignupForm;
