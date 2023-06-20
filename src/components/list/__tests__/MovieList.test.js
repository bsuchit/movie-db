import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MovieList from "../MovieList";

describe('Given MovieList', () => {
    const movies = [{
        title: 'A New Hope',
        release_date: '1980-12-05',
        episode_id: 1
      },
      {
        title: 'Return of the jedi',
        release_date: '1983-05-25',
        episode_id: 2
    }];

    it('should render correctly with given props', () => {
        const { container } = render(<MovieList movies={movies} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should show search results when input changed', async () => {
        render(<MovieList movies={movies} />);
        const input = screen.getByTestId('search');
        await userEvent.type(input.childNodes[0], 'New');
        let movieTile = screen.getByTestId('A New Hope');
        expect(movieTile).toBeInTheDocument();
        movieTile = screen.queryByTestId('Return of the jedi');
        expect(movieTile).not.toBeInTheDocument();
    });

    it('should sort movies when sort checkbox checked', async () => {
        const { container } = render(<MovieList movies={movies} />);
        const sortButton = screen.getByText('Sort By');
        await userEvent.click(sortButton);
        const checkbox = screen.getByTestId('episode_id');
        await userEvent.click(checkbox.childNodes[0]);
        expect(container.firstChild).toMatchSnapshot();
    });
});
