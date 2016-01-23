import React from 'react';
import HomeStore from '../stores/HomeStore.js';
import HomeActions from '../actions/HomeActions.js';
import Hello from '../components/Hello.jsx';

var Home = React.createClass({
  getInitialState() {
    return HomeStore.getState();
  },

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getData();
  },

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  handleChangeName(e) {
      let data = this.state.data;
      data.name = e.target.value;
      this.setState({data})
  },

  handleChangeAge(e) {
    let data = this.state.data;
    data.age = e.target.value;
    this.setState({data})
  },

  render() {
    return (
        <div>
            <Hello />
            <span>What is yout name and age?</span>
            <p>
                <span>Name: </span>
                <input onChange={this.handleChangeName}
                  value={this.state.data.name} />

                <span> and age: </span>
                <input onChange={this.handleChangeAge}
                    value={this.state.data.age} />
            </p>
            <p>
              <span>Your name is {this.state.data.name} and your are {this.state.data.age} years old.</span>
            </p>
        </div>
    );
  }
});

module.exports = Home;
