import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FilterPopup from "../FilterPopup";

const sortByData = [
    {
      name: 'episode_id',
      label: 'Episode'
    },
    {
      name: 'release_date',
      label: 'Release Date'
    }
  ];

describe('Given FilterPopup', () => {
    const mockOnSelected = jest.fn();

    it('should render correctly with given props', () => {
        const { container } = render(<FilterPopup data={sortByData} selection={null} onSelected={mockOnSelected} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should call onSelected when checkbox is clicked', () => {
        render(<FilterPopup data={sortByData} selection={null} onSelected={mockOnSelected} />);
        const checkbox = screen.getByTestId('episode_id');
        userEvent.click(checkbox.childNodes[0]);
        expect(checkbox.childNodes[0]).toBeChecked();
        expect(mockOnSelected).toHaveBeenCalledWith('episode_id', true);
    });
});