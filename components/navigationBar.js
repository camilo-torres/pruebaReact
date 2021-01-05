import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createMaterialBottomTabNavigator();

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