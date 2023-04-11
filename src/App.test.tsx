import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * This is a test for the App component.
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to my page/i);
  expect(linkElement).toBeInTheDocument();
});
