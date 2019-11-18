import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class MapScreen extends Component {
  render(){
    return (
      <View style={[styles.container]}>
        <Text style={[styles.font]}>Where are we going?</Text>
        <Text style={[styles.smallFont]}>(psst! I'm listening! 🦻)</Text>
        <Image style={[styles.imageContainer]} source={require('../assets/img/map.jpg')}></Image>
        <TouchableOpacity style={[styles.buttonContainer]} onPress={() => this.props.navigation.navigate('Confirm')}>
          <View>
            <Text style={[styles.font]}>OK</Text>
          </View>
        </TouchableOpacity>
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
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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