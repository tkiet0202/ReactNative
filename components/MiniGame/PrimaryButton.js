import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({children, onPress}){
   function pressHandler(){
      console.log('abc');
      
   }
   return(
      
      <View style={styles.buttonOuterContainer}>
         <Pressable style={styles.buttonContainer} onPress={onPress} android_ripple={{color: '#640233'}}>
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
      backgroundColor: '#72063e',
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