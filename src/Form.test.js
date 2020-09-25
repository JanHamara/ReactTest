import React from 'react'
import { render, fireEvent, act, getByTestId, getByLabelText } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
   it('has heading, input fields and disabled signup button when it renders', () => {
      const { getByText, getAllByTestId } = render(<Form id="raisely-form"/>)
      const heading = getByText('Login to Raisely')
      const inputs = getAllByTestId("input");
      const button = getByText('Sign Up')

      expect(heading).toBeInTheDocument()
      inputs.map(input => expect(input).toBeInTheDocument())
      expect(button).toBeInTheDocument()
   })

   it('enables submit button after the form is filled and email in correct format', () => {
      const submitData = jest.fn();
      const { getByText, getByLabelText } = render(<Form id="raisely-form"/>);
      const button = getByText('Sign Up');
      const firstName = getByLabelText('First Name');
      const lastName = getByLabelText('Last Name');
      const email = getByLabelText('Email');
      const password = getByLabelText('Password');

      const formData = {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          password: "johndoe123"
      }
    
      act(() => {
          fireEvent.change(firstName, { taget: { value: formData.firstName }});
          fireEvent.change(lastName, { taget: { value: formData.lastName }});
          fireEvent.change(email, { taget: { value: formData.email }});
          fireEvent.change(password, { taget: { value: formData.password }});
          fireEvent.blur(password);
      })

      expect(button).toBeEnabled();
   })
})