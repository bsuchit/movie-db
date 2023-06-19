import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ActionBar from "../ActionBar";

describe('Given ActionBar', () => {
    const mockOnSort = jest.fn();
    const mockOnSearch = jest.fn();

    it('should render correctly with given props', () => {
        const { container } = render(<ActionBar onSearch={mockOnSearch} onSort={mockOnSort} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should call onSearch when input changed', () => {
        render(<ActionBar onSearch={mockOnSearch} onSort={mockOnSort} />);
        const input = screen.getByTestId('search');
        userEvent.type(input.childNodes[0], 'movie');
        expect(mockOnSearch).toHaveBeenCalledWith('movie');
    });

    it('should call onSort when checkbox checked', async () => {
        render(<ActionBar onSearch={mockOnSearch} onSort={mockOnSort} />);
        const sortButton = screen.getByText('Sort By');
        await userEvent.click(sortButton);
        const checkbox = screen.getByTestId('episode_id');
        userEvent.click(checkbox.childNodes[0]);
        expect(mockOnSort).toHaveBeenCalledWith('episode_id');
    });
});