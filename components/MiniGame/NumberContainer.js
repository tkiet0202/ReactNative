import { StyleSheet, Text, View } from "react-native";
import Color from "../../constants/colors";

function NumberContainer({children}){
   return <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
   </View>
}
export default NumberContainer;

const styles = StyleSheet.create({
   container: {
     borderWidth: 4,
     borderColor: Color.primary700,
     padding: 24,
     margin: 24,
     borderRadius: 8,
     alignItems: 'center',
     justifyContent: 'center'
   },
   numberText: {
     color: Color.primary700,
     fontSize: 36,
     fontWeight: 'bold'
   },
 });
 