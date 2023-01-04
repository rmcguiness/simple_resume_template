import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders About', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/);
  expect(linkElement).toBeInTheDocument();
});
