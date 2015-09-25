/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  ListView,
  Component,
  Text,
  View,
  TouchableOpacity,
} = React;

var Store = require('./store.js');
var Actions = require('./actions.js');
var connectToStores = require('alt/utils/connectToStores');
var List = require('./components/list.js');
var Detail = require('./components/detail.js')
var styles = require('./assets/styles.js');

class moviesApp extends Component{

  static getStores(){
      return [Store];
  }

  static getPropsFromStores(){
    return Store.getState();
  }

  _renderScene(route, navigator) {
    Actions.setRoute(route, navigator);
    switch(route.index){
      case 1:
        return (<Layout><List /></Layout>);
      case 2:
        return (<Layout><Detail /></Layout>);
    }
  }

  render(){
    return(
        <Navigator
          initialRoute={{name: 'List Movies', index:1}}
          renderScene={this._renderScene}
          // configureScene={this._configureScene}
        />
    );
  }
}

AppRegistry.registerComponent('moviesApp', () => connectToStores(moviesApp));
