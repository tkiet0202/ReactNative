import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './GoalItem'
import GoalInput from './GoalInput';

 function GoalContainer() {
  const [value, setValue] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setValue(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { id: Math.random().toString(), text: value }
    ]);
    setValue('');
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  return ( 
    <View style={styles.container}>
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} value={value} />
      <View style={styles.goalContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={itemData => (
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
export default GoalContainer;
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
  goalContainer: {
    flexDirection: 'column',
    maxHeight: 600,
  },
});
