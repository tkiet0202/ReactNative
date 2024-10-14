import { Image, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetail from "../components/Categories/MealDetail"

function MealDetailScreen({route, navigation}){
   const mealId = route.params.mealId
   const selectedMeal = MEALS.find((meal)=> meal.id === mealId)

   return(
      <View>
         <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
         <Text style={styles.title}>{selectedMeal.title}</Text>
         <View>
         <MealDetail duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} />

         </View>
         <Text>Ingredients</Text>
         {selectedMeal.ingredients.map(ingredient =>(
            <Text key={ingredient}>{ingredient}</Text>
         ) )}
         <Text>Steps</Text>
         {selectedMeal.steps.map(step =>(
            <Text key={step}>{step}</Text>
         ) )}
      </View>
   )


}

export default MealDetailScreen

const styles = StyleSheet.create({
   image:{
      width: '100%',
      height: 350
   },
   title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'white'

   }
})
