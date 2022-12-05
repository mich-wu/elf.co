import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'

import CreateEvent from '../CreateEvent'

describe('CreateEvent component test', () => {
  it('renders', () => {
    render(<CreateEvent />, { wrapper: MemoryRouter })
    expect(screen.getByText(/Create a New Event/i)).toBeInTheDocument()
  })
  it('has input field', () => {
    render(<CreateEvent />, { wrapper: MemoryRouter })
    expect(
      screen.getByLabelText('Event Name:', { selector: 'input' })
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Event Date:', { selector: 'input' })
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Event Budget:', { selector: 'input' })
    ).toBeInTheDocument()
  })

  it('has onchange', () => {
    render(<CreateEvent />, { wrapper: MemoryRouter })
    const input = screen.getByLabelText('Event Name:', { selector: 'input' })
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.change(input, { target: { value: 'Puppy Christmas Party' } })
    expect(input.value).toBe('Puppy Christmas Party')
  })
})

describe('test form use as a user', () => {
  test('type into input fields', async () => {
    render(<CreateEvent />, { wrapper: MemoryRouter })

    const inputName = screen.getByLabelText('Event Name:', {
      selector: 'input',
    })
    const inputDate = screen.getByLabelText('Event Date:', {
      selector: 'input',
    })
    const inputBudget = screen.getByLabelText('Event Budget:', {
      selector: 'input',
    })

    await userEvent.type(inputName, 'Puppy Christmas Party')
    await userEvent.type(inputDate, '2022-12-19')
    await userEvent.type(inputBudget, '50')

    expect(inputName).toHaveValue('Puppy Christmas Party')
    expect(inputDate).toHaveValue('2022-12-19')
    expect(inputBudget).toHaveValue(50)
  })
})
