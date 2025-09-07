// src/Hello.test.tsx
import { render, screen } from '@testing-library/react'
import Hello from './Hello'

it('renders', () => {
  render(<Hello />)
  expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
})
