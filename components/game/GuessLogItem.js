import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textItem}>#{roundNumber}</Text>
      <Text style={[styles.textItem, {paddingLeft: 10}]}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const parentWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary700,
    borderWidth: 1,
    borderRadius: 40,
    padding: 5,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  textItem: {
    fontSize: 12,
  },
});
