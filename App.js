import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
// import AppLoading from "expo-app-loading"; //=> DEPRECATED

import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);


  const chooseNumberHandler = (number) => {
    setUserNumber(number);
  };

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setRounds(numberOfRounds);
  }

  function startGameHandler(){
    setUserNumber(null);
    setGameOver(false);
    setRounds(0);
  }

  let screen = <StartGameScreen onChooseNumber={chooseNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (userNumber && gameOver) {
    screen = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onStartGame={startGameHandler} />;
  }

  return (
    <LinearGradient
      colors={[Colors.gradientTop, Colors.gradientBottom]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackgroundStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 20,
    // paddingTop: 10,
  },

  imageBackgroundStyle: {
    opacity: 0.15,
  },
});
