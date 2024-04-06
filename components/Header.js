import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 25,
    width: "100%",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
});
