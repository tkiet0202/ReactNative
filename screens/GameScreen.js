import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/MiniGame/Title";
import Color from "../constants/colors";
import {useState, useEffect} from 'react'; 
import NumberContainer from "../components/MiniGame/NumberContainer";
import PrimaryButton from "../components/MiniGame/PrimaryButton";


function generateRandomBetween(min, max, exclude) {
   const rndNum = Math.floor(Math.random() * (max - min)) + min;
 
   if (rndNum === exclude) {
     return generateRandomBetween(min, max, exclude);
   } else {
     return rndNum;
   }
 }

   let minBoundary = 1;
   let maxBoundary = 100;

function GameScreen({userNumber, onGameOver, onStartNewGame}){
   const initialGuess = generateRandomBetween(1, 100, userNumber);
   const [currentGuess, setCurrentGuess] = useState(initialGuess);

   useEffect(()=>{
      if(currentGuess === userNumber){
         onGameOver()
      }
     
   },[currentGuess, userNumber, onGameOver])

   function nextGuessHandler(direction){
      if(
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
      ){
         Alert.alert("Dont't lie!", 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
         return;
      }

      if(direction === 'lower'){
         maxBoundary = currentGuess
      }else{
         minBoundary = currentGuess + 1; 
      }
      const newRndNumber =  generateRandomBetween(minBoundary, maxBoundary, currentGuess)
      setCurrentGuess(newRndNumber)
   }
   
return (
   
   <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
         <Text>Higher Or Lower</Text>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
   </View>
)
}

export default GameScreen; 

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 40,
   },
   title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: Color.primary700,
      borderWidth: 4,
      borderColor: Color.primary700,
      textAlign: 'center',
      padding: 12
   }
})