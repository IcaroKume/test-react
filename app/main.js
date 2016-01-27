import React from 'react';
import {render} from 'react-dom';
import {IntlProvider} from 'react-intl';
import { Router, Route, IndexRoute, Link} from 'react-router'
import { browserHistory } from 'react-router'
import Home from './routes/Home.jsx';
import News from './routes/News.jsx';
import mui from 'material-ui';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

const SelectableList = SelectableContainerEnhance(List);

const AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var intlData = {
    "greeting": "Hello my name is {name}.\n"
};

const App = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object,
    },

    getInitialState() {
        return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
          open: false,
        };
    },

    getChildContext() {
        return {
          muiTheme: this.state.muiTheme,
        };
    },

    componentWillMount() {
        let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
          accent1Color: Colors.deepOrange500,
        });

        this.setState({muiTheme: newMuiTheme});
    },

    handleToggle() {this.setState({open: !this.state.open})},

    handleRequestChangeList() {this.setState({open: false})},

    render() {

        return (
          <div>
              <LeftNav docked={false} open={this.state.open} onRequestChange={open => this.setState({open})}>
                  <SelectableList valueLink={{value: "", requestChange: this.handleRequestChangeList}}>
                      <ListItem>
                          <Link to="/">Home</Link>
                      </ListItem>
                      <ListItem>
                          <Link to="/news">News</Link>
                      </ListItem>
                  </SelectableList>
              </LeftNav>

              <header>
                <AppBar title='test-react' onLeftIconButtonTouchTap={this.handleToggle}
                  isInitiallyOpen={true}
                  />
              </header>
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

                    <Route path="*" component={Home}/>
                </Route>
        </Router>
    </IntlProvider>
    ), document.getElementById('app'))
