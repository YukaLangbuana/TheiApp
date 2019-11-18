import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class ConfirmScreen extends Component {
  render(){
    return (
      <View style={[styles.container]}>
        <Text style={[styles.font]}>Did you say:</Text>
        <Text style={[styles.smallFont]}>CUB Building@WSU ?</Text>
        <Image style={[styles.imageContainer]} source={require('../assets/img/cub.jpeg')}></Image>
        <TouchableOpacity style={[styles.buttonContainer]} onPress={() => this.props.navigation.navigate('Travel')}>
          <View>
            <Text style={[styles.font]}>YES!</Text>
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