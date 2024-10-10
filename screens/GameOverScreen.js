import { Image, StyleSheet, Text, View } from "react-native";
import Color from "../constants/colors";
import Title from "../components/MiniGame/Title";
import PrimaryButton from "../components/MiniGame/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
   return(
      <View style={styles.screen}>
         <Title>GAME OVER</Title>
         <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')}/>
         </View>
         <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.hightLight}>{roundsNumber}</Text> rounds to guess the number
            <Text style={styles.hightLight}> {userNumber} </Text>.
         </Text>
         <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>

     
   )
}
export default GameOverScreen;

const styles = StyleSheet.create({
   screen: {
      flex:1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageContainer:{
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: Color.primary800,
      overflow: 'hidden',
      margin: 24

   },
   image:{
      width: '100%',
      height: '100%'

   },
   summaryText: {
      fontSize: 24,
      textAlign: 'center',
      marginVertical: 24
   },
   hightLight:{
      color: Color.primary500
   }
})