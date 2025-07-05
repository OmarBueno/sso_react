import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login message', () => {
  render(<App />);
  const msg = screen.getByText(/Bienvenido/i);
  expect(msg).toBeInTheDocument();
});
