import {createContext, useReducer} from 'react'
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

export const ExpensesContext = createContext({
   expenses: [],
   addExpenses: ({description, amount, date}) =>{},
   deleteExpenses: (id)=> {},
   updateExpenses: (id, {description, amount, date}) => {}
});

function expensesReducer(state, action){
   switch(action.type){
      case 'ADD':
         const id = new Date().toString() + Math.random().toString();
         return [{...action.payload, id: id}, ...state];
         case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
               (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem; // Fix: use the index
            return updatedExpenses;         
         case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
         
      default: 
         return state;
   }
}

function ExpensesContextProvider({children}) {
   const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

   function addExpenses(expenseData) {
      dispatch({type: 'ADD', payload: expenseData});
   }
   function deleteExpenses(id) {
      dispatch({type: 'DELETE', payload: id}); // Fixed action type
   }
   function updateExpenses(id, expenseData) {
      dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
   }

   const value = {
      expenses: expenseState,
      addExpenses: addExpenses,
      deleteExpenses: deleteExpenses,
      updateExpenses: updateExpenses
   };
   
   return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
