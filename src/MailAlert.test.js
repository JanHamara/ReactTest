import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MailAlert from './MailAlert'

describe('MailAlert', () => {
   it('renders a mail alert', () => {
      const { getByText } = render(<MailAlert mail={'testmail2@test.com'} disabled={false} disableMailAlert={jest.fn()}/>)
      expect(getByText('Oops!')).toBeInTheDocument()
      expect(getByText('It seems like the email address you provided has been already registered!')).toBeInTheDocument()
      expect(getByText('Use a different email address')).toBeInTheDocument()
      expect(getByText('testmail2@test.com')).toBeInTheDocument()
   })

   it('button disables mail alert on click', () => {
     const disableAlertHandler2 = jest.fn()
     const { getByText } = render(<MailAlert mail={'testmail2@test.com'} disabled={false} disableMailAlert={disableAlertHandler2}/>)
     const button = getByText('Use a different email address')
     fireEvent.click(button);
     expect(disableAlertHandler2).toBeCalled()
   })
})