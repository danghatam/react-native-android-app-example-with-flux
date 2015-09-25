var Alt = require('./alt.js');
var Actions = require('./actions.js');

class Store{
  constructor(){
    this.bindListeners({
      'setRoute': Actions.setRouteSuccess,
    });
    this.state = {
      currentRoute: {},
      previousRoute: {},
      navigator: {},
    };
  }

  setRoute(route, navigator){
    this.setState({
      previousRoute: this.state.currentRoute,
      currentRoute: route,
      navigator: navigator,
    });
  }
}

module.exports = Alt.createStore(Store, 'Store');
