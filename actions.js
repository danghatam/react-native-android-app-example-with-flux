var Alt = require('./alt.js');

class Actions {
  constructor(){
      this.generateActions(
        'setRouteSuccess'
      );
  }

  setRoute(route, navigator){
    this.setRouteSuccess(route, navigator);
  }
}

module.exports = Alt.createActions(Actions);
