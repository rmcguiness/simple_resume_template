import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Header/);
  expect(linkElement).toBeInTheDocument();
});
