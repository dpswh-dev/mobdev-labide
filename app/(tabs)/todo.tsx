import { View, StyleSheet, FlatList, Modal } from "react-native";
import {
  Text,
  Button,
  IconButton,
  TextInput,
  Portal,
  Dialog,
} from "react-native-paper";
import { useState } from "react";

// Define a Todo interface for type safety
interface Todo {
  id: string;
  text: string;
  finished: boolean;
}

export default function TodoScreen() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Clean dog pooper", finished: true },
    { id: "2", text: "Buy groceries", finished: false },
    { id: "3", text: "Do laundry", finished: true },
    { id: "4", text: "Pay bills", finished: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");
  // State to control the visibility of the modal
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => {
    setModalVisible(false);
    setNewTodoText(""); // Clear input when closing modal
  };

  const addTodo = () => {
    if (newTodoText.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodoText,
          finished: false,
        },
      ]);
      setNewTodoText("");
      hideModal(); // Close the modal after adding
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleFinished = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Vincent Todo</Text>

      {/* Make the FlatList take only the space it needs */}
      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <View style={styles.todoContent}>
                <Text
                  style={[
                    styles.todoText,
                    item.finished && styles.finishedText,
                  ]}
                >
                  {item.text}
                </Text>
                <View style={styles.actions}>
                  <IconButton
                    icon={item.finished ? "check-circle" : "circle-outline"}
                    size={24}
                    onPress={() => toggleFinished(item.id)}
                    iconColor={item.finished ? "#4CAF50" : "#666"}
                  />
                  <IconButton
                    icon="delete"
                    size={24}
                    onPress={() => deleteTodo(item.id)}
                    iconColor="#f44336"
                  />
                </View>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>

      {/* Input Container with Button to Open Modal */}
      <View style={styles.inputContainer}>
        <Button
          mode="contained"
          onPress={showModal}
          style={styles.addButton}
          buttonColor="#7e57c2"
          icon="plus"
        >
          Add New Task
        </Button>
      </View>

      {/* Add Task Modal */}
      <Portal>
        <Dialog
          visible={modalVisible}
          onDismiss={hideModal}
          style={styles.modal}
        >
          <Dialog.Title style={styles.dialogTitle}>Add New Task</Dialog.Title>
          <Dialog.Content>
            <TextInput
              style={styles.modalInput}
              mode="outlined"
              label="Task name"
              placeholder="Enter task description"
              value={newTodoText}
              onChangeText={setNewTodoText}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideModal}>Cancel</Button>
            <Button mode="contained" onPress={addTodo} buttonColor="#7e57c2"  textColor="white">
              Add
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <IconButton
          icon="format-list-bulleted"
          size={28}
          iconColor="#7e57c2"
          onPress={() => {}}
        />
        <IconButton
          icon="check"
          size={28}
          iconColor="#7e57c2"
          onPress={() => {}}
        />
        <IconButton
          icon="account"
          size={28}
          iconColor="#7e57c2"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  listContainer: {
    flex: 1,
    marginBottom: 10,
  },
  todoItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  todoContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: 16,
    flex: 1,
    marginRight: 16,
  },
  finishedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  inputContainer: {
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    zIndex: 10,
  },
  addButton: {
    borderRadius: 8,
    width: "100%",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  modalInput: {
    marginTop: 10,
    backgroundColor: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    zIndex: 5,
  },
  dialogTitle: {
    color: "#000000",
  },
});
