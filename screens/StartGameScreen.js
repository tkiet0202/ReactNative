import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/MiniGame/PrimaryButton";
import React, { useState } from 'react';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber)
  }

  return (
   <View style={styles.rootContainer}>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad' // Corrected
        autoCapitalize='none'
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
   </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
   rootContainer:{
      flex: 1,
      marginTop: 100,
      alignItems: 'center'
   },
  inputContainer: {
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: '#72063c',
    elevation: 8,
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 }
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
