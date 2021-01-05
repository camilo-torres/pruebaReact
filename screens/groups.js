import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  body: {
    backgroundColor: Colors.white,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
});

const image = require('../assets/images/fondo.png');

class Groups extends Component{
  render(){
    return(
        <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
      <Text style={{textAlign:'center', textAlignVertical: 'center'}}>Groups</Text>
      </View>
      </ImageBackground>
    );
  }
}

export default Groups;