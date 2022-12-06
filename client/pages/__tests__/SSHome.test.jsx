import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import SSHome from '../SSHome'

describe('CreateEvent component test', async () => {
  it('renders', () => {
    render(<SSHome />, { wrapper: MemoryRouter })
    expect(screen.getByText(/Secret Santa/i)).toBeInTheDocument()
  })
  it('has an image', () => {
    render(<SSHome />, { wrapper: MemoryRouter })
    expect(screen.getByAltText(/secret santa/i))
  })
  it('has an link', () => {
    render(<SSHome />, { wrapper: MemoryRouter })
    userEvent.click(screen.getByText(/LET'S GET STARTED!/i))
    expect(screen.getByText(/Secret Santa/i)).toBeInTheDocument()
  })
})
