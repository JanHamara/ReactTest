import React from 'react';
import { render } from '@testing-library/react';
import SignupForm from './SignupForm';

test('renders learn react link', () => {
  const { getByText } = render(<SignupForm />);
  const formHeading = getByText(/Login to Raisely/i);
  expect(formHeading).toBeInTheDocument();
});
