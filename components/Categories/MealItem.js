import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MealDetail from "./MealDetail"

function MealItem({id, title, imageUrl, affordability, complexity, duration}){
   const navigation = useNavigation()

   function selectMealItem(){
      navigation.navigate('MealDetail', {
         mealId: id
      })
   }
  
   return(
      <View style={styles.mealItem}>
         <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> (pressed ? styles.buttonPressed : null)} onPress={selectMealItem}>
            <View>
               <Image style={styles.image} source={{ uri: imageUrl }} />
               <Text style={styles.title}>{title}</Text>
              <MealDetail duration={duration} affordability={affordability} complexity={complexity} />
            </View>
         </Pressable>
      </View>
   )
}

export default MealItem

const styles = StyleSheet.create({
   mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: 'white',
      elevation: 8,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOpacity: 0.24,
      shadowOffset: {width: 0, height: 2},
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
   },
   image:{
      with: '100%',
      height: 200,
   },
   title: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      margin: 8,
   },
   buttonPressed:{
      opacity: 0.5
   },
   details: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8
   },
   detailItem: {
      marginHorizontal: 4,
      fontSize: 12
   }
})