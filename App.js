import { useState } from "react";
import { StyleSheet, FlatList, Keyboard, Alert, Pressable } from "react-native";

import { Header, Form, TodoItem } from "./components";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todoText) => {
    if (!todoText)
      return Alert.alert("An error has occurred", "The task can't be empty.", [
        { text: "fine" },
      ]);
    if (todoList.find((todoItem) => todoItem.task === todoText))
      return Alert.alert(
        "An error has occurred",
        "This task is already added",
        [{ text: "fine" }]
      );
    setTodoList((prevState) => [
      ...prevState,
      { task: todoText, id: Math.random().toString() },
    ]);
  };

  const handleRemoveTodo = (id) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <Header />
      <Form handleAddTodo={handleAddTodo} />
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem todo={item} handleRemoveTodo={handleRemoveTodo} />
        )}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    margin: 10,
    width: 200,
    borderRadius: 10,
  },
  list: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
});
