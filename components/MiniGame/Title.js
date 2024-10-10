import { StyleSheet, Text } from "react-native"
import Color from "../../constants/colors"

function Title({children}){
   return(
      <Text style={styles.title}>{children}</Text>
   )
}
export default Title
const styles = StyleSheet.create({
   
   title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      borderWidth: 4,
      borderColor: 'white',
      textAlign: 'center',
      padding: 12
   }
})