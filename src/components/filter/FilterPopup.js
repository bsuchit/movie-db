import React, { useEffect, useState } from "react";
import { List, Checkbox } from "semantic-ui-react";
import PropTypes from 'prop-types';
import _ from "lodash";

function FilterPopup({ data = [], selection = [], onSelected }){
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(selection);
    }, [selection]);

    const handleOnChange = (e, data) => {
        onSelected(data.name, data.checked);
    };

    return <List>
        {
            _.map(data, ({ name, label }) => (
                <List.Item key={name} >
                    <Checkbox
                        name={name}
                        label={label}
                        checked={selection && name === value}
                        onChange={handleOnChange}
                        data-testid={name}
                    />
                </List.Item>
            ))
        }
  </List>;
}

FilterPopup.propTypes = {
    data: PropTypes.array,
    onSelected: PropTypes.func,
    selection: PropTypes.string
}

export default FilterPopup;