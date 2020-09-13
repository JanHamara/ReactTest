import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SuccessAlert from './SuccessAlert'


describe('SuccessAlert', () => {
   it('renders a success message', () => {
      const { getByText } = render(<SuccessAlert mail={'a.a@a.com'} disabled={false} disableSuccessAlert={jest.fn()}/>)
      expect(getByText('Awesome!')).toBeInTheDocument()
      expect(getByText('You have successfully signed up with the following email address')).toBeInTheDocument()
      expect(getByText('Log in')).toBeInTheDocument()
      expect(getByText("a.a@a.com")).toBeInTheDocument()
   })

   it('disables success alert on click', () => {
     const disableAlertHandler = jest.fn()
     const { getByText } = render(<SuccessAlert mail={'a.a@a.com'} disabled={false} disableSuccessAlert={disableAlertHandler}/>)
     const button = getByText('Log in')
     fireEvent.click(button)
     expect(disableAlertHandler).toBeCalled()
   })
})