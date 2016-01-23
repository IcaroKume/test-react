import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import {IntlProvider} from 'react-intl';

var intlData = {
    "greeting": "Hello my name is {name}.\n"
};

main();

function main() {
    ReactDOM.render(
        <IntlProvider locale='en' messages={intlData}>
    		<Home />
    	</IntlProvider>, document.getElementById('app'));
}
