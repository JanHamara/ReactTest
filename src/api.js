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

    const body = await mailResponse.json();

    return body.data.status === 'OK'
}


