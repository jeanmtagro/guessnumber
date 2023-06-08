import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}> {children} </Text>;
};

export default Title;

const styles = StyleSheet.create({

    title: {
      fontSize: 25,
      fontWeight: "bold",
      color: 'white',
      textAlign: 'center',
      borderColor: 'white',
      borderWidth: 2,
      padding: 10
    },
  });