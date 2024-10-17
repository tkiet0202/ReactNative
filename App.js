import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';
import React, { useState, useF } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageExpenses from './tracked-screens/ManageExpenses';
import RecentExpenses from './tracked-screens/RecentExpenses';
import AllExpenses from './tracked-screens/AllExpenses';
import { GlobalStyles } from './styles';
import IconButton from './UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';
import TrackedApp from './components/TrackedApp/TrackedApp';




export default function App() {
return(
  <>
  <TrackedApp></TrackedApp>
  </>
)
  
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    
    
  },
  backgroundImage: {
    opacity: 0.3,
  }
  
});
