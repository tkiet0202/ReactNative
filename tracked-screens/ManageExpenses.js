import {useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from "react-native"
import IconButton from '../UI/IconButton'
import { GlobalStyles } from '../styles'
import Button from '../UI/Button'

function ManageExpenses({route, navigation}){
   const  editedExpensesId = route.params?.expensesId
   const isEditing = !!editedExpensesId

   useLayoutEffect(()=>{
      navigation.setOptions({
         title: isEditing ? 'Edit Expense' : 'Add Expense'
      })
   },[navigation, isEditing])

   function deleteExpenseHandler(){
      navigation.goBack();
   }

   function cancelHandler(){
      navigation.goBack();
      
   }

   function confirmHandler(){
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