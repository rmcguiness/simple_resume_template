import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

test('renders Projects', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/Projects/);
  expect(linkElement).toBeInTheDocument();
});
