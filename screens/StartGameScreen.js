import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  // Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView, // to close keyboard (++ iOS)
  ScrollView,
} from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = (props) => {
  const { width, height } = useWindowDimensions() // get dynamically dims
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (input) => {
    setEnteredNumber(input);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert(
        "Invalid Number!", //alert title
        "Number has to be between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }] // alert button
      );
      // return;
    }

    props.onChooseNumber(chosenNumber);
  };

  const marginTopDynamic = height < 380 ? 15 : 30;

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior='position'>
        <View style={[styles.screen, {marginTop: marginTopDynamic}]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <PrimaryButton onPress={resetInputHandler}>Cancel</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;


const styles = StyleSheet.create({

  root: {
    flex: 1
  },

  screen: {
    flex: 1,
    alignItems: "center"
  },

  numberInput: {
    // flex: 0.5,
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    flex: 1,
  },
});
