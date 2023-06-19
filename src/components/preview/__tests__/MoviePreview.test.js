import React from "react";
import { render } from "@testing-library/react";

import MoviePreview from "../MoviePreview";

describe('Given FilterPopup', () => {
    const mockGetPoster = jest.fn();

    const props = {
        title: "A New Hope",
        episode: 4,
        director: "Chris Nolan",
        releaseDate: "1977-05-25",
        description: "Plot",
        producer: "Gary Kurtz",
        getPoster: mockGetPoster,
        poster: "https://examplexyz.com/poster.png",
        ratings: [{ Source: 'IMDB' , Value: '8.6/10'}],
        loading: false,
        runtime: "121 min",
        language: "English, Hindi"
    }

    it('should render correctly with given props', () => {
        const { container } = render(<MoviePreview {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should show loader WHEN loading', () => {
        const { container } = render(<MoviePreview {...props} loading />);
        expect(container.firstChild).toMatchSnapshot();
    });

});
