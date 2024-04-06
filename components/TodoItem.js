import { StyleSheet, Pressable, Text } from "react-native";

export const TodoItem = ({ todo, handleRemoveTodo }) => {
  return (
    <Pressable>
      <Text style={styles.todoItem} onPress={() => handleRemoveTodo(todo.id)}>
        {todo.task}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "pink",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: "center",
  },
});
