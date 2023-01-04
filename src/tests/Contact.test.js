import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders Contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Contact/);
  expect(linkElement).toBeInTheDocument();
});
