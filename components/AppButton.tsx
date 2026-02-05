import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface AppButtonProps {
  children: string;
  onPress: () => void;
}

const AppButton = ({
    children,
    onPress
}: AppButtonProps) => {
  return (
    <TouchableOpacity style={styles.createTodoButton} activeOpacity={0.6} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default AppButton


const styles = StyleSheet.create({
  createTodoButton: {
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
