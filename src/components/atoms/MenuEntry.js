import React from 'react';
import PropTypes from 'prop-types';

const MenuEntry = props => {
    return (
        <div className="menu-entry">
            <a href="#">{props.name}</a>
        </div>
    );
};

MenuEntry.propTypes = {
    name: PropTypes.string.isRequired
};

export default MenuEntry;