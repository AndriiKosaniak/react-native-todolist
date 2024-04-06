import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export const Form = ({ handleAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <View style={styles.form}>
      <Text>Enter your task:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Buy some groceries"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button
        title="Add todo"
        color="coral"
        onPress={() => handleAddTodo(todoText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    margin: 10,
    width: 200,
    borderRadius: 10,
  },
});
