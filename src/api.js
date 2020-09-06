export const validateMail = async (email) => {
    const emailData = {
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data": {
            "email": email,
        }
    }

    const mailResponse = await fetch("https://api.raisely.com/v3/check-user", {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(emailData)
    })

    const mailResponseBody = await mailResponse.json();

    return mailResponseBody.data.status === 'OK'
}

// export const submitForm
export const submitForm = async (firstName, lastName, email, password) => {
    const formData = {
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data": {
         "firstName": firstName,
         "lastName": lastName,
         "email": email,
         "password": password
        } 
    }

    const formResponse = await fetch("https://api.raisely.com/v3/signup", {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(formData)
    })

    const formResponseBody = await formResponse.json();

    return formResponseBody
}
