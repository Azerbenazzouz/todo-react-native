import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { Checkbox } from 'react-native-paper'
import { Todo } from '@/types/todoTypes'
import { TodoContext } from '@/context/Todo.context';

interface CardProps {
  todo: Todo;
}

const Card = ({ todo }: CardProps) => {
  const {toggleTodo, removeTodo} = useContext(TodoContext);

  const handleRemoveTodo = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => removeTodo(todo.id)
      }
    ]);
    // removeTodo(todo.id);
  }
  return (
    <TouchableOpacity 
      onPress={() => toggleTodo(todo.id)}
      onLongPress={handleRemoveTodo}
      activeOpacity={0.5} 
      style={styles.todoCard}>
      <Checkbox.Item 
        label="" 
        status={todo.completed ? "checked" : "unchecked"} 
        onPress={() => toggleTodo(todo.id)}
      />
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <Text>{new Date(todo.timeStamp!).toLocaleString()}</Text>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  todoCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    elevation: 2,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: "500",
  }
});