import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';
//
//
test('loads and displays data', async () => {
  const mockFetch = jest.fn().mockResolvedValue(['apple', 'banana']);

  render(<Home fetchFn={mockFetch} />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByTestId('data')).toHaveTextContent('apple');
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});

test('handles fetch error', async () => {
  const mockFetch = jest.fn().mockRejectedValue(new Error('Fetch failed'));

  render(<Home fetchFn={mockFetch} />);

  await waitFor(() => {
    expect(screen.getByTestId('error')).toHaveTextContent('Fetch failed');
  });
});
