'use strict';

var React = require('react-native');
var {Component, View, TouchableOpacity} = React;
var Store = require('./store.js');
var Actions = require('./actions.js');
var connectToStores = require('alt/utils/connectToStores');
class Layout extends Component{

  static getStore(){
    return [Store];
  }
  static getPropsFromStores(){
    return Store.getState();
  }

  render(){
    return(
      <View>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text>{this.props.previousName}</Text>
          </TouchableOpacity>
        </View>
        {this.props.children}
      </View>
    );
  }
}

module.exports = connectToStores(Layout);
