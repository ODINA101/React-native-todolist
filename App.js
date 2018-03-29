import React, { Component } from 'react';
import { StyleSheet,View,Text} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './components/home';
import Full from './components/page2';


const Navigation = StackNavigator({
   
  Home: { screen: Home },
  full: {screen: Full}
},{ 
  headerMode: 'screen' 
});
 
export default Navigation;