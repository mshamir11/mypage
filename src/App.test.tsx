import { render, screen } from '@testing-library/react';
import App from './App';
import { Designs } from './Designs';

/**
 * This is a test for the Navbar component.
 * It checks if the navbar is rendered.
 */
test('renders navbar', () => {
  render(<App />);
  const navbar = screen.getByText(/home/i);
  expect(navbar).toBeInTheDocument();
}
)
/**
 * This is a test for the Designs component.
 * It checks if the designs are rendered.
 */
test('renders designs', () => {
  render(<Designs />);
  const designs = screen.getByTestId("design-title");
  expect(designs).toBeInTheDocument();
}
)