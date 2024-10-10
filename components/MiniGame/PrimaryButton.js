import { Pressable, StyleSheet, Text, View } from "react-native";
import Color from "../../constants/colors";

function PrimaryButton({children, onPress}){
   return(
      <View style={styles.buttonOuterContainer}>
         <Pressable style={styles.buttonContainer} onPress={onPress} android_ripple={{color: Color.primary500}}>
            <Text style={styles.buttonText}>{children}</Text>
         </Pressable>
      </View> 
      
   )
}

export default PrimaryButton;

const styles = StyleSheet.create({
   buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,

   },
   buttonContainer: {
      backgroundColor: Color.primary800,
      borderRadius: 28,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 4,
   },
   buttonText: {
      color: 'white',
      textAlign: 'center'
   }

})