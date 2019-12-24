import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react page with form', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tasmota Template JSON/);
  expect(linkElement).toBeInTheDocument();
});
