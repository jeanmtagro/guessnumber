import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const parentWith = Dimensions.get('window').width
// console.log(parentWith)

const styles = StyleSheet.create({
  card: {
    
    alignItems: "center",
    marginTop: parentWith < 500 ? 15 : 30,
    width: parentWith < 380 ? '70%' : '90%',
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 10, // for Android : box shadow
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
