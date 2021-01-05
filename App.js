import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet, } from "react-native";
import Navig from './components/mainTab'
import TopBar from './components/mainTab'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
});

class App extends Component{
  render(){
    return(
        <NavigationContainer style={{backgroundColor:'white'}}>
        <TopBar/>
        </NavigationContainer>
    );
  }
}


export default App;