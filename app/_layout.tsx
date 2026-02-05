import { TodoProvider } from "@/context/Todo.context";
import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return <PaperProvider>
    <TodoProvider>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="create" options={{ headerShown: false }} />
      </Stack>
    </TodoProvider>
  </PaperProvider>
}
