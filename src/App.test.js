import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sort By button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sort By/i);
  expect(linkElement).toBeInTheDocument();
});
