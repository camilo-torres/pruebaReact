/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Yupi (){
  return <Text style= {{textAlign: 'center'}}> 
      yupiiiiiiiiii
    </Text>;
}

const image = require('./assets/images/fondo.png');

const App: () => React$Node = () => {
  return (
    <>
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Yupi/>
    </ImageBackground>
  </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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

export default App;
