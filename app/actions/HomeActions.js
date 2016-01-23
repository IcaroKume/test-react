import alt from '../alt';

class HomeActions {
  getData() {
    return {name: 'lucy', age: 10};
  }
}

module.exports = alt.createActions(HomeActions);
