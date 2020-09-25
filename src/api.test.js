import React from 'react'
import { render } from '@testing-library/react'
import { mockResponseOnce } from '@testing-library/jest-dom'
import { validateMail } from './api'

describe('API', () => {
    it('validates email format', async () => {
        // Use fetch mock instead of calling prod API
        fetch.mockResponseOnce('https://api.raisely.com/v3/check-user', {data : {status: "OK"}})

        const email = "testmail@test.com"

        const validationResponse = await validateMail(email)

        expect(validationResponse).toBe(true);
    })
 })