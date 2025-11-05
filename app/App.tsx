import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ToDoList from "../components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <View>
      <ToDoList task={tasks} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
