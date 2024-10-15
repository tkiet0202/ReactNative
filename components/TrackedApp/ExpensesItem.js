import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../styles";
import { getFormattedDate } from "../../util/date";

function ExpensesItem({id, description, date, amount}){
   const navigation = useNavigation()
   
   function expensesPressHandler(){
      navigation.navigate('ManageExpenses',{
         expensesId: id
      });

   }

  return(
   <Pressable onPress={expensesPressHandler} style={ ({pressed}) => pressed && styles.pressed} android_ripple>
   <View style={styles.expensesItem}>
      <View>
         <Text style={[ styles.textBase, styles.description]}>{description}</Text>
         <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
      </View>
      <View style={styles.amountContainer}>
         <Text style={styles.amount}>{amount}</Text>
      </View>
   </View>
</Pressable>
  )
}

export default ExpensesItem

const styles = StyleSheet.create({
   pressed: {
      opacity: 0.7
   },
   expensesItem: {
      padding: 12,
      marginVertical: 8,
      backgroundColor: GlobalStyles.colors.primary500,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 6,
      elevation: 3,
      shadowColor: GlobalStyles.colors.gray500,
      shadowRadius: 4,
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.4
   },
   textBase: {
      color: GlobalStyles.colors.primary50,
   },
   description:{
      fontSize: 16,
      marginBottom: 4,
      fontWeight: 'bold'
   },
   amountContainer: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      minWidth: 80
   },
   amount: {
      color: GlobalStyles.colors.primary500,
      fontWeight: 'bold'
   }
})