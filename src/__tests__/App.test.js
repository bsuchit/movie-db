import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Given App.js', () => {
  it('should render app.js', () => {
    const movies = [{
      title: 'A New Hope',
      release_date: '1980-12-05'
    },
    {
      title: 'Return of the jedi',
      release_date: '1983-05-25'
    }];

    const mockOnMount = jest.fn();

    const { container } = render(<App onMount={mockOnMount} movies={movies} isLoading={false} error={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show loader WHEN loading', () => {
    const mockOnMount = jest.fn();

    const { container } = render(<App onMount={mockOnMount} movies={[]} isLoading={true} error={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show error WHEN failed', () => {
    const mockOnMount = jest.fn();

    const { container } = render(<App onMount={mockOnMount} movies={[]} isLoading={false} error={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders Sort By button', () => {
    render(<App />);
    const linkElement = screen.getByText(/Sort By/i);
    expect(linkElement).toBeInTheDocument();
  });
});
