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
      <Text style={styles.headerText}>New Task</Text>

      <View style={styles.formContainer}>
        <TextInput
          label="What needs to be done?"
          style={styles.todoInput}
          value={todo}
          onChangeText={(text) => setTodo(text)}
          mode="outlined"
          placeholder="Enter your todo"
          textColor="#1F2937"
          activeOutlineColor="#4F46E5"
          outlineColor="#E5E7EB"
          theme={{ roundness: 12 }}
        />
        <View style={styles.buttonContainer}>
            <AppButton onPress={handleAddTodo} >
                Create Task
            </AppButton>
        </View>
      </View>
    </View>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 24,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1F2937",
    marginBottom: 32,
    marginTop: 40,
    letterSpacing: -1,
  },
  formContainer: {
    gap: 24,
  },
  todoInput: {
    fontSize: 16,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    marginTop: 8,
  }
});
