import React from "react";
import { render, fireEvent, act, getAllByTestId, getByTestId } from '@testing-library/react'
import Form from './Form'

describe('Input', () => {
    it("should display warning text if user blurs from empty input field", () => {
        // Test for one input and render input
        const { getAllByTestId, getByTestId } = render(<Form id="raisely-form"/>);
        const inputs = getAllByTestId("input");
        const alerts = getAllByTestId("inputalert");
        const mailAlert = getByTestId("inputalert mailinputalert");
        const alertsdisplay = getAllByTestId("alertdisplay");

        act(() => {
            inputs.forEach(el => {
                fireEvent.change(el, { target: { value: '' } })
                fireEvent.blur(el)
            })
        })

        //alertsdisplay.forEach(alertdisplay => expect(alertdisplay.children[1].className).toBe("raisely-invalid-input raisely-invalid"));
        alerts.forEach(alert => {expect(alert.innerHTML).toContain("This field is required")})
        expect(mailAlert.innerHTML).toContain("This field is required")
    })


    it("should display mail warning text if user blurs from email input with wrong mail address format", () => {
        const { getByTestId } = render(<Form id="raisely-form"/>);
        const mailInput = getByTestId("input mailinput");
        const mailInputAlert = getByTestId("inputalert mailinputalert");

        act(() => {
            fireEvent.change(mailInput, { target: { value: 'testtest@a.' } })
            fireEvent.blur(el)
        })

        expect(mailInputAlert.innerHTML).toContain("Incorrect email format (e.g. text@text.com)");
    })
})