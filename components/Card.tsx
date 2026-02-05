import { Text, StyleSheet, TouchableOpacity, Alert, View } from 'react-native'
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
  }
  return (
    <TouchableOpacity 
      onPress={() => toggleTodo(todo.id)}
      onLongPress={handleRemoveTodo}
      activeOpacity={0.7} 
      style={styles.todoCard}>
      <Checkbox.Item 
        label="" 
        status={todo.completed ? "checked" : "unchecked"} 
        onPress={() => toggleTodo(todo.id)}
        color="#4F46E5"
      />
      <View style={styles.textContainer}>
        <Text style={[styles.todoTitle, todo.completed && styles.todoTitleCompleted]} numberOfLines={1}>
            {todo.title}
        </Text>
        <Text style={styles.timeStamp}>{new Date(todo.timeStamp!).toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  todoCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginLeft: 4,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 4,
  },
  todoTitleCompleted: {
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
  timeStamp: {
    fontSize: 12,
    color: "#6B7280",
  }
});