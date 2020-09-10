// Mail Validation - validateMail()
export const validateMail = async (email) => {
    // Request Post Body
    const emailData = {
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data": {
            "email": email,
        }
    }

    // Make the POST request to the Raisely API (asynchronous)
    const mailResponse = await fetch("https://api.raisely.com/v3/check-user", {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(emailData)
    })

    // Parse the response body text as JSON
    const mailResponseBody = await mailResponse.json();

    // Return true/false based on status value
    return mailResponseBody.data.status === 'OK'
}

// Form Validation - validateForm()
export const validateForm = (firstName, lastName, email, password) => {
    // Validate that no input field is empty
    if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
        // Validate email format
        return validateMailFormat(email);
    } else {
        return false;
    }
}

// Mail Format Validation - validateMailFormat()
export const validateMailFormat = (email) => {
    // RegEx for validating correct formatting of email address
    const mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (mailRegEx.test(email))
}

// Form Submit - submitForm()
export const submitForm = async (firstName, lastName, email, password) => {
    // Request Post Body
    const formData = {
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data": {
         "firstName": firstName,
         "lastName": lastName,
         "email": email,
         "password": password
        } 
    }

    // Make the POST request to the Raisely API (asynchronous)
    const formResponse = await fetch("https://api.raisely.com/v3/signup", {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(formData)
    })

    // Parse the response body text as JSON
    const formResponseBody = await formResponse.json();

    console.log(formResponseBody.message); // thank you for joining

    // Return the response body
    return formResponseBody
}
