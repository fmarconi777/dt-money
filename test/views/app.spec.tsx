import React from 'react'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '@/views/App'

describe('App Component', () => {
  test('Should open modal when button is clicked', async () => {
    const component = render(<App />)
    await act(async () => {
      await userEvent.click(component.getByRole('button', { name: /Nova transação/i }))
    })
    expect(await component.findByTestId('modal')).toBeInTheDocument()
  })
})
