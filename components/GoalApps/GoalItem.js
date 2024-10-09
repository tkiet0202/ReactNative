import { View,Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props){
   const {text, onDeleteItem} = props
return(
   <Pressable onPress={() => onDeleteItem(props.id)}>
      <View>
         <Text style={styles.goalItem}>{text}</Text>
      </View>
   </Pressable> 
   
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