import React from 'react';

import Basic from './sections/basic';

export default class Content extends React.PureComponent {
    render() {
        return (
            <div className="content">
                <Basic/>
            </div>
        );
    }
}
