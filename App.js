import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';
import React, { useState } from 'react';


export default function App() {
  
  return ( 
   <MiniGame></MiniGame>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Color.accent500,
    
  },
  backgroundImage: {
    opacity: 0.3,
  }
  
});
