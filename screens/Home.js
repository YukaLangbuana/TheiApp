import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class HomeScreen extends Component {
  render(){
    return (
      <View style={[styles.container]}>
        <TouchableOpacity style={[styles.startButtonContainer]} onPress={() => this.props.navigation.navigate('Map')}>
          <View>
            <Text style={[styles.font]}>START</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.emergencyButtonContainer]}>
          <View>
            <Text style={[styles.font]}>EMERGENCY</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  startButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#61DAFB',
  },
  emergencyButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D11926',
  },
  font: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff"
  }
})