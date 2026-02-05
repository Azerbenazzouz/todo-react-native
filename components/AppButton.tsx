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
    backgroundColor: "#4F46E5",
    paddingVertical: 16,
    paddingHorizontal: 24,
    margin: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    // Modern shadow
    shadowColor: "#4F46E5",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
