import React from 'react';

import MenuEntry from '../components/atoms/MenuEntry';

const Header = () => {
    return (
        <header>
            <nav>
                <MenuEntry name="Basic"/>
                <MenuEntry name="Stations"/>
                <MenuEntry name="Skills"/>
                <MenuEntry name="References"/>
                <MenuEntry name="Hobbies"/>
            </nav>
        </header>
    );
};

export default Header;