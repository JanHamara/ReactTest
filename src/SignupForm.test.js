import React from 'react'
import { render } from '@testing-library/react'
import SignupForm from './SignupForm'
import Form from './Form'

describe('Signup Form', () => {
   it('renders with logo and form', () => {
      const { getByAltText } = render (<SignupForm />);
      const form = render(<Form id="raisely-form"/>);
      const logo = getByAltText('raisely-logo');

      expect(logo).toBeInTheDocument()
      expect(form).toBeDefined()
   })
})