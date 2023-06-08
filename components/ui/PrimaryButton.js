import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed] // for iOS
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const parentWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
  },

  buttonText: {
    color: "white",
    fontSize: parentWith < 380 ? 12 : 18,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
