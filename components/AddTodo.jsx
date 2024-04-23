import { Text, TouchableOpacity } from "react-native";
import { addTodoStyle } from "../styles/AddTodoStyle";
import { useState } from "react";
import Dialog from "react-native-dialog";

export default function AddTodo(props) {
  const [showAddFlag, setShowAddFlag] = useState(false);
  const [newText, setNewTxt] = useState("");
  const renderAddTodoDialog = () => {
    return (
      <Dialog.Container
        visible={showAddFlag}
        onBackdropPress={() => setShowAddFlag(false)}
      >
        <Dialog.Title style={{ color: "blue" }}>Add New Todo</Dialog.Title>
        <Dialog.Description>Choose a name for your Todo</Dialog.Description>
        <Dialog.Input
          style={{ color: "black" }}
          placeholder="Ex. Gym Sessions"
          onChangeText={(text) => setNewTxt(text)}
        ></Dialog.Input>
        <Dialog.Button
          label="Cancel"
          color="grey"
          onPress={() => setShowAddFlag(false)}
        />
        <Dialog.Button
          label="Save"
          onPress={() => {
            props.addNewTodoList(newText);
            setShowAddFlag(false);
            setNewTxt("");
          }}
          disabled={newText.length === 0}
        />
      </Dialog.Container>
    );
  };

  return (
    <>
      <TouchableOpacity
        style={addTodoStyle.btn}
        onPress={() => setShowAddFlag(true)}
      >
        <Text style={addTodoStyle.txt}>+ New Todo</Text>
      </TouchableOpacity>
      {renderAddTodoDialog()}
    </>
  );
}
