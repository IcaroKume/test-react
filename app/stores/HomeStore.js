import alt from '../alt';
import HomeActions from '../actions/HomeActions.js';

class HomeStore {
  constructor() {
    this.data = {
        name: '',
        age: 0
    };

    this.bindListeners({
      setData: HomeActions.GET_DATA
    });
  }

  setData(data) {
    this.data = data;
  }
}

module.exports = alt.createStore(HomeStore, 'HomeStore');
