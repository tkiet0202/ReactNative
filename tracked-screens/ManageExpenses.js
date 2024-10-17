import {useLayoutEffect, useContext} from 'react'
import { StyleSheet, Text, View } from "react-native"
import IconButton from '../UI/IconButton'
import { GlobalStyles } from '../styles'
import Button from '../UI/Button'
import { ExpensesContext } from '../store/expenses-context'

function ManageExpenses({route, navigation}){
   const expensesCtx = useContext(ExpensesContext)

   const  editedExpensesId = route.params?.expensesId
   const isEditing = !!editedExpensesId

   useLayoutEffect(()=>{
      navigation.setOptions({
         title: isEditing ? 'Edit Expense' : 'Add Expense'
      })
   },[navigation, isEditing])

   function deleteExpenseHandler() {
      if (editedExpensesId) {
         expensesCtx.deleteExpenses(editedExpensesId);  // Pass the expense ID here
         navigation.goBack();
      }
   }
   
   function cancelHandler(){
      navigation.goBack();
      
   }

   function confirmHandler() {
      if (isEditing) {
         expensesCtx.updateExpenses(
            editedExpensesId,
            {
               description: 'Test!!!!!!',
               amount: 19.99,
               date: new Date('2024-10-07')
            }
         );
      } else {
         expensesCtx.addExpenses({
            description: 'Text',
            amount: 19.99,
            date: new Date('2024-10-17')
         });
      }
      navigation.goBack();
   }
   
   
   return (
      <View style={styles.container}>
      <View style={styles.buttons}>
         <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
         <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && (
         <View style={styles.deleteContainer}>
         <IconButton 
            icon="trash" 
            color={GlobalStyles.colors.error500} 
            size={36} 
            onPress={deleteExpenseHandler} />
         </View>
      )}
   </View>
   )
}
export default ManageExpenses

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.primary800
   },
   buttons:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   button: {
      minWidth: 120,
      marginHorizontal: 8
   },
   deleteContainer: {
      marginTop: 16,
      paddingTop: 8,
      borderWidth: 2,
      borderTopColor: GlobalStyles.colors.primary200,
      alignItems:'center'
   }
})