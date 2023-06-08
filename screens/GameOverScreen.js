import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


const GameOverScreen = ({roundsNumber, userNumber, onStartGame}) => {


  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/gameover.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.textSummary}>
        Your phone needed <Text style={styles.textHighlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.textHighlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const parentWith = Dimensions.get("window").width;
const l = 150
const w = 200

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: parentWith < 380 ? l : w,
    height: parentWith < 380 ? l : w,
    borderRadius: parentWith < 380 ? l/2 : w/2, //half of width,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textSummary: {
    paddingBottom: 5,
    fontSize: parentWith < 380 ? 15 : 20,
    textAlign: "center",
  },
  textHighlight: {
    // fontFamily: "AvenirNext-Bold",
    color: Colors.primary500,
  },
});
