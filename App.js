import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View,} from 'react-native';

import GoalContainer from './components/GoalApps/GoalContainer';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return ( 
    <View style={styles.rootScreen} >
    <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <StartGameScreen></StartGameScreen>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f'
  },
  backgroundImage: {
    opacity: 0.35,
  }
  
});
