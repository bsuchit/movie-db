import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Popup, Input } from "semantic-ui-react"; 

import FilterPopup from "components/filter/FilterPopup";
import 'components/components.scss';

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

function ActionBar({ onSearch, onSort }) {
  const [searchText, setSearchText] = useState();
  const [sortBySelection, setSortBySelection] = useState();

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleOnFilterSelected = (name, checked) => {
    setSortBySelection(checked ? name : null);
    onSort(name);
};

  return <div>
    <div className="row list_header">
      <Popup 
        content={<FilterPopup
          data={sortByData}
          selection={sortBySelection}
          onSelected={handleOnFilterSelected}
        />} 
        on='click'
        pinned
        trigger={<Button className="sortby_button" content="Sort By" />}
        position="bottom left"
      />
      <Input
        type="text"
        className="search_input"
        placeholder="Type to search..."
        value={searchText}
        onChange={handleOnChange}
        icon='search'
        data-testid='search'
      />
    </div>
  </div>;
}

ActionBar.propTypes = {
  onSort: PropTypes.func,
  onSearch: PropTypes.func
};

export default ActionBar;
