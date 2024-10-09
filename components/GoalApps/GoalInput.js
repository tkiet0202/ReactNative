import { View,Text, StyleSheet, TextInput, Button } from "react-native";

function GoalItem(props){
   const {goalInputHandler, addGoalHandler, value} = props
return(
   <View>
   <TextInput style={styles.text} value={value} onChangeText={goalInputHandler} placeholder="Your course goal!"></TextInput>
       <Button title={'add goal'} onPress={addGoalHandler}></Button>
   </View>
)
}
export default GoalItem;
const styles = StyleSheet.create({
   goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
    width: "auto"
  }
})