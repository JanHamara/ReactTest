import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Form from './Form'

describe('SubmitButton', () => {
   it('is disabled when the form loads', () => {
      const { getByText } = render(<Form id="raisely-form"/>);
      const button = getByText('Sign Up');
      fireEvent.click(button);
      expect(button).toBeDisabled();
   })
})