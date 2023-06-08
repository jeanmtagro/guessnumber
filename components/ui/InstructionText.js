import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return (
    <View>
      {/* sort of cascading styles : additionnal style we add via prop 'style' from a parent */}
      <Text style={[styles.textInstruction, style]}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const parentWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  textInstruction: {
    color: Colors.accent500,
    marginBottom: 15,
    fontSize: parentWith < 400 ? 15 : 20,
  },
});
