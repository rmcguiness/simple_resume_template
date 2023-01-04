import { render, screen } from '@testing-library/react';
import Resume from '../components/Resume';

test('renders Resume', () => {
  render(<Resume />);
  const linkElement = screen.getByText(/Resume/);
  expect(linkElement).toBeInTheDocument();
});
