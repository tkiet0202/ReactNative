import { FlatList, StyleSheet, Text, View } from "react-native"
import { useRoute } from "@react-navigation/native"
import React, { useState, useLayoutEffect  } from 'react';
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealItem from "../components/Categories/MealItem";

function MealOverviewScreen({route, navigation }){
  
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
         return mealItem.categoryIds.indexOf(catId) >= 0; 
    });
    
    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title;

      navigation.setOptions({
         title: categoryTitle
       })
    }, [catId, navigation])
    
    
    

    function renderMealItem(itemData){
      const item = itemData.item
      const mealItemProp = {
         id: item.id,
         title: item.title,
         imageUrl: item.imageUrl,
         affordability: item.affordability,
         complexity: item.complexity,
         duration: item.duration
      }
      return (<MealItem {...mealItemProp}/>)
    }
   return(
      <View style={styles.container}>
         <FlatList data={displayedMeals} keyExtractor={(item)=> item.id}  renderItem={renderMealItem}/>
      </View>
   )
}
export default MealOverviewScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,

   }
})