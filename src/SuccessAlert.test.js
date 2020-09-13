import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
require('jest-canvas-mock');
import SuccessAlert from './SuccessAlert'
import { unmountComponentAtNode } from "react-dom";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders a success message', () => {
    const { container, getByText } = render(<SuccessAlert />)
    expect(getByText('Awesome!')).toBeInTheDocument()
    expect(getByText('You have successfully signed up with the following email address')).toBeInTheDocument()
  })

