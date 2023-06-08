import React from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  // floor to round down; random() rand num in [0-1]; +min => randNum >= min
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

// here managed outside func component for we don't want to reset after each reload component
// but we want to reset after each game over
let minNumber = 1;
let maxNumber = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  /* IMPORTANT : hardcore here (don't use nimNumber/maxNumber variables) to avoid "Maximum call
   * stack size exceeded" error, when the number is guessed i.e currentGuessNumber === userNumber
   * (minNumber = maxNumber) => .. can't generate number between two egal numbers AND useEffect()
   * IS CALLED AFTER ALL COMPONENTS AND FONCTION HAVE BEEN EXECUTED ! */
  const initialGuessNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuessNumber, setCurrentGuessNumber] =
    useState(initialGuessNumber);
  const [guessRounds, setGuessRounds] = useState([initialGuessNumber]);

  useEffect(() => {
    if (currentGuessNumber === userNumber) {
      onGameOver(guessRounds.length);
      // to reset minNumber, maxNumber
      minNumber = 1;
      maxNumber = 100;
    }
  }, [currentGuessNumber, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    // direction => lower or greater
    if (
      (direction === "lower" && currentGuessNumber < userNumber) ||
      (direction === "greater" && currentGuessNumber > userNumber)
    ) {
      Alert.alert("Number Error", "Don't lie 😉 ! You know that it is wrong.", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuessNumber;
    } else {
      minNumber = currentGuessNumber + 1;
    }
    const newRndNumber = generateRandomBetween(
      minNumber,
      maxNumber,
      currentGuessNumber
    );
    setCurrentGuessNumber(newRndNumber);
    setGuessRounds((prevGuessRound) => [newRndNumber, ...prevGuessRound]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuessNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{justifyContent:'space-between', alignItems: 'center'}}
          // alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 0,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },

  instructionText: {
    marginBottom: 30,
  },

  listContainer: {
    // flex: 1,
    // alignItems: "center",
    padding: 5,
  },
});
