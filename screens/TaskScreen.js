import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import TaskItem from "../components/TaskItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeMessage from "../components/WelcomeMessage";

export default function TaskScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Read React docs",
    "Finish homework",
    "Buy groceries",
  ]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks((currentTasks) => [...currentTasks, task.trim()]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks((currentTasks) => currentTasks.filter((_, i) => i !== index));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Header />
      <View style={styles.body}>
        <WelcomeMessage name="John" />
        <Text style={styles.title}>Task Manager</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={task}
          onChangeText={setTask}
        />

        <Button title="Add Task" onPress={addTask} />

        <FlatList
          data={tasks}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item, index }) => (
            <TaskItem task={item} onDelete={() => deleteTask(index)} />
          )}
          style={styles.list}
          ListEmptyComponent={<Text style={styles.empty}>No tasks yet.</Text>}
        />
      </View>
      <Footer />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  body: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1a1a1a",
  },
  input: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    padding: 14,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 16,
  },
  empty: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
  },
});
