// ---------------------------------------------------------------------------------------------------

// Validation Functions

// ---------------------------------------------------------------------------------------------------

export const validateMailFormat = (email) => {
    // I validate email format with RegEx here, because I need to change the component state 
    // (and consequently styling) based on email address
    // WITHOUT submitting the form
    // This RegEx works in this particular example with traditional form of email address,
    // BUT it would not be an ideal solution for production. (does not cover all types of addresses)
    const mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (mailRegEx.test(email))
}

// ---------------------------------------------------------------------------------------------------

export const validateForm = (firstName, lastName, email, password) => {
    if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
        return validateMailFormat(email);
    } else {
        return false;
    }
}

// ---------------------------------------------------------------------------------------------------
