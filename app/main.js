import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import {IntlProvider} from 'react-intl';

var intlData = {
    "greeting": "Hello {name}.\n"
};

main();

function main() {
    ReactDOM.render(
        <IntlProvider locale='en' messages={intlData}>
    		<Hello />
    	</IntlProvider>, document.getElementById('app'));
}