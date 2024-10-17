import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';
import React, { useState, useF } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';





import { GlobalStyles } from '../../styles';
import IconButton from '../../UI/IconButton';
import ExpensesContextProvider from '../../store/expenses-context';
import ManageExpenses from '../../tracked-screens/ManageExpenses';
import RecentExpenses from '../../tracked-screens/RecentExpenses';
import AllExpenses from '../../tracked-screens/AllExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview(){
    return (
    <BottomTabs.Navigator screenOptions={({navigation})=>( {
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => ( 
          <IconButton 
            icon="add" 
            size={24} 
            color={tintColor} 
            onPress={()=>{
              navigation.navigate('ManageExpenses')
            }}
            />
        )
    })}> 
      <BottomTabs.Screen 
      name='RecentExpenses' 
      component={RecentExpenses} 
      options={{
        title: 'RecentExpenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => ( <Ionicons name='hourglass' size={size} color={color}/>


        )
      }}/>
      <BottomTabs.Screen 
        name='AllExpenses' 
        component={AllExpenses}
        options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({color, size}) =>(<Ionicons name='hourglass' size={size} color={color}/>)
      }}
        />
    </BottomTabs.Navigator>
    )
}

export default function TrackedApp() {
return(
  <>
  <StatusBar style='auto'/>
  <ExpensesContextProvider>
  <NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor: 'white'
  }}>
    <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} options={{headerShown: false}}/>
    <Stack.Screen name='ManageExpenses' component={ManageExpenses} options={{presentation: 'modal',}}/>
  </Stack.Navigator>
  </NavigationContainer>
  </ExpensesContextProvider>
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
