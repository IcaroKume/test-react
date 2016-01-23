import React from 'react';
import {render} from 'react-dom';
import {IntlProvider} from 'react-intl';
import { Router, Route, IndexRoute, Link} from 'react-router'
import { browserHistory } from 'react-router'
import Home from './routes/Home.jsx';
import News from './routes/News.jsx';

var intlData = {
    "greeting": "Hello my name is {name}.\n"
};

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Test React</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

render((
    <IntlProvider locale='en' messages={intlData}>
        <Router history={browserHistory} >
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="news" component={News} />
                </Route>
        </Router>
    </IntlProvider>
    ), document.getElementById('app'))
