'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
} = React;

var Store = require('../store.js');
var Actions = require('../actions.js');
var connectToStores = require('alt/utils/connectToStores');

class List extends Component{

  static getStores(){
      return [Store];
  }

  static getPropsFromStores(){
    return Store.getState();
  }

  render(){
    return (
      <View>
        <Text>{this.props.routeName}</Text>
      </View>
    )
  }
}

module.exports = connectToStores(List);
