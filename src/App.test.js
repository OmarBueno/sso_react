import { render, screen } from '@testing-library/react';

test('renders login message', () => {
  process.env.REACT_APP_AZURE_CLIENT_ID = 'test';
  process.env.REACT_APP_AZURE_TENANT_ID = 'test';
  const App = require('./App').default;
  render(<App />);
  const msg = screen.getByText(/Bienvenido/i);
  expect(msg).toBeInTheDocument();
});
