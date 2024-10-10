import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';
import React, { useState } from 'react';


// import GoalContainer from './components/GoalApps/GoalContainer';




import StartGameScreen from '../../screens/StartGameScreen';
import GameScreen from '../../screens/GameScreen';
import Color from '../../constants/colors';
import GameOverScreen from '../../screens/GameOverScreen';

export default function MiniGame() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRound] = useState()

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;
   
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} onStartNewGame={startNewGameHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }

  function gameOverHandler(){
    setGameIsOver(true)
  };

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRound(0);
  }
  
  return ( 
    <View style={styles.rootScreen} >
    <ImageBackground 
        source={require('../../assets/images/background.png')}
        resizeMode='cover' 
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}>
       {screen}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Color.accent500,
    
  },
  backgroundImage: {
    opacity: 0.3,
  }
  
});
