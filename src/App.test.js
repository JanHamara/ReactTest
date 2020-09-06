import React from 'react';
import { render } from '@testing-library/react';
import SignupForm from './App';

test('renders learn react link', () => {
  const { getByText } = render(<SignupForm />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
