import AppButton from "@/components/AppButton";
import { TodoContext } from "@/context/Todo.context";
import React, { useContext, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext)

  const handleAddTodo = () => {
    if(!todo){
        Alert.alert("Error", "Todo cannot be empty");
        return;
    }
    addTodo(todo);
    setTodo("");
    Alert.alert("Success", "Todo added successfully");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>createTodo</Text>

      <View style={styles.formContainer}>
        <TextInput
          label="Add a new todo"
          style={styles.todoInput}
          value={todo}
          onChangeText={(text) => setTodo(text)}
          mode="outlined"
          placeholder="Enter your todo"
          textColor="#000000"
          
        />
      <AppButton onPress={handleAddTodo} >
        Add Todo
      </AppButton>
      </View>
    </View>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  formContainer: {
    marginVertical: 20,
    gap: 10,
  },
  todoInput: {
    fontSize: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
});
