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
      <ScrollView contentContainerStyle={styles.todoListContent} style={styles.todoContainer}>
      <Text style={styles.todoHeader}>My Tasks</Text>
        {todos.length > 0 ? (
          todos.slice().reverse().map((todo) => (
            <Card key={todo.id} todo={todo} />
          ))
        ) : (
          <View style={styles.emptyState}>
             <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <Link asChild href="/create">
          <AppButton onPress={() => {}} >
            + New Task
          </AppButton>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  todoContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  todoListContent: {
    paddingBottom: 100,
  },
  todoHeader: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1F2937",
    marginBottom: 20,
    marginTop: 40,
    letterSpacing: -1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: 10,
  },
  emptyState: {
    marginTop: 100,
    alignItems: 'center',
  },
  emptyText: {
    color: '#9CA3AF',
    fontSize: 16,
  }
});
