import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Assistant from '../screens/assistant';
import Groups from '../screens/groups';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, StyleSheet, View, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 50,
    width: 50,
    borderRadius: 40,
    overflow: 'hidden'
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const image = require('../assets/images/mu.png');

class ActionBarImage extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={image}
          style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
        /> 
      </View>    
    );  
  }
}

class CirclePicture extends Component {
  render() {
    return (
      <TouchableHighlight 
      //onPress={Profile}
          style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1, marginRight: 15 }]}
        >
    <Image source={{ uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" }} style={styles.profileImg} />
    </TouchableHighlight>
    );  
  }
}

function TopBar(){
  return(
    <Stack.Navigator screenOptions={{headerLeft: () => <ActionBarImage/>, headerRight: () => <CirclePicture/> }}>
        <Stack.Screen name="Medio Universitario" component={Navig}/>
      </Stack.Navigator>
  );
}

function Navig(){
  return(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="black"
    inactiveColor='grey'
    barStyle={{backgroundColor:'white'}}
    >
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} 
        
        />
      <Tab.Screen name="Assistant" component={Assistant} options={{
          tabBarLabel: 'Assistant',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="help-circle" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Groups" component={Groups} options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default TopBar;