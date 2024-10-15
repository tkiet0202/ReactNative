import { FlatList, StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../styles"

const DUMMY_EXPENSES =[
   {
     id: 'e1',
     description: 'A pair of shoes',
     amount: 59.99,
     date: new Date('2024-12-15') 
   },
   {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2024-10-18') 
   },
   {
      id: 'e3',
      description: 'Some banana',
      amount: 5.99,
      date: new Date('2024-10-15') 
   },
   {
   id: 'e4',
   description: 'A book',
   amount: 14.9,
   date: new Date('2024-10-18') 
   },
   {
      id: 'e5',
      description: 'Another book',
      amount: 11.59,
      date: new Date('2024-1-18') 
   },
   {
      id: 'e6',
      description: 'A pair of trousers',
      amount: 9.29,
      date: new Date('2024-10-18') 
   },
   {
      id: 'e7',
      description: 'Some banana',
      amount: 12.79,
      date: new Date('2024-1-15') 
   },
   {
   id: 'e8',
   description: 'A book',
   amount: 7.99,
   date: new Date('2024-1-18') 
   },
   {
      id: 'e9',
      description: 'Another book',
      amount: 13.59,
      date: new Date('2024-1-18') 
   }
]
function ExpensesOutput({expenses, expensesPeriod}){
   return <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
   </View>
}
export default ExpensesOutput

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 0,
      
      backgroundColor: GlobalStyles.colors.primary700
   }
})