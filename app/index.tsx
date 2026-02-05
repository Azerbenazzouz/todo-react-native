import AppButton from "@/components/AppButton";
import Card from "@/components/Card";
import { TodoContext } from "@/context/Todo.context";
import { Link } from "expo-router";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { todos } = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.todoContainer}>
      <Text style={styles.todoHeader}>TODOS</Text>
        {todos.slice().reverse().map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </ScrollView>
      <View>
        <Link asChild href="/create">
          <AppButton onPress={() => {}} >
            Create Todo
          </AppButton>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  todoContainer: {
    marginVertical: 10,
    padding: 10,
  },
  todoHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
