import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWith = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    width: '30%',
    padding: deviceWith < 500 ? 18 : 24,
    margin: deviceWith < 500 ? 18 : 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWith < 500 ? 24 : 36,
  },
});
