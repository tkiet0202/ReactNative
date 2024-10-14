import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';
import React, { useState, useF } from 'react';
import CategoriesScreen from './categories-screen/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import MealOverviewScreen from './categories-screen/MealsOverviewScreen';
import MealDetailScreen from './categories-screen/MealDetailScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return ( 
   <>
   <StatusBar/>
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', contentStyle: {backgroundColor: '#3f2f25'}}}>
      <Stack.Screen 
        name='MealCategories' 
        component={CategoriesScreen} 
        options={{title: 'All categories', }}/>
      <Stack.Screen 
        name='MealsOverview' 
        component={MealOverviewScreen}
        />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
      />
   </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    
    
  },
  backgroundImage: {
    opacity: 0.3,
  }
  
});
