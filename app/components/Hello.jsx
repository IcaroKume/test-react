import './Hello.css';
import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class Hello extends React.Component {

    render() {
        return (
            <p>
                <FormattedMessage id='greeting' values={{name: 'Eric'}} />
            </p>
        );
    }
};
