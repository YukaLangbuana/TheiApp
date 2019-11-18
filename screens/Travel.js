import React, {Component} from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class TravelScreen extends Component {
  render(){
    return (
      <View style={[styles.container]}>
        <Text style={[styles.font]}>Alright, Let's Go!</Text>
        <Image style={[styles.imageContainer]} source={require('../assets/img/walk.gif')}></Image>
        <TouchableHighlight style={[styles.buttonContainer]}>
          <View>
            <Text style={[styles.font]}>⬆️ Go straight!</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#61DAFB',
  },
  font: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
    textAlign: "center"
  },
  smallFont: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 5,
    textAlign: 'center'
  },
  imageContainer: {
      height: 500,
      width: 420,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'green',
  },
})