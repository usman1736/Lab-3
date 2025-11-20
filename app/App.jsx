import ToDoForm from "@/components/ToDoForm";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ToDoList from "../components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View>
      <ToDoList task={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
