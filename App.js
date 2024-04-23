import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import BodyMain from "./components/BodyMain";
import Footer from "./components/Footer";
import { appStyle } from "./styles/AppStyle";
import { View, ScrollView, Alert } from "react-native";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
let flags = { firstRender: true, firstLoad: false };
export default function App() {
  const [todolist, setTodoList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    loadTodoList();
  }, []);
  const saveTodoList = async () => {
    try {
      await AsyncStorage.setItem("todoList", JSON.stringify(todolist));
    } catch (err) {
      console.log(err);
    }
  };
  const loadTodoList = async () => {
    try {
      const initialListString = await AsyncStorage.getItem("todoList");
      const initialList = JSON.parse(initialListString);
      setTodoList(initialList || []);
      flags.firstLoad = true;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!flags.firstLoad) {
      if (!flags.firstRender) {
        saveTodoList();
      } else {
        flags.firstRender = false;
      }
    } else {
      flags.firstLoad = false;
    }
    setFilterList(todolist);
  }, [todolist]);
  const addNewTodoList = (text) => {
    const newTodo = {
      id: uuid.v4(),
      title: text,
      isCompleted: false,
    };
    setTodoList([...todolist, newTodo]);
  };
  const deleteTodo = (data) => {
    Alert.alert("Delete Note", "Are you sure?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const newTodoList = todolist.filter((todo) => todo.id !== data.id);
          setTodoList(newTodoList);
        },
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };
  const countStatus = todolist.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.completed++ : acc.inProgress++;
      return acc;
    },
    { all: todolist.length, inProgress: 0, completed: 0 }
  );
  const filterTodo = (flag) => {
    if (flag === "all") {
      setFilterList(todolist);
    } else if (flag === "completed") {
      const newList = todolist.filter((data) => data.isCompleted === true);
      setFilterList(newList);
    } else if (flag === "inProgress") {
      const newList = todolist.filter((data) => data.isCompleted === false);
      setFilterList(newList);
    }
  };
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.main}>
          <View style={appStyle.header}>
            <Header />
          </View>
          <ScrollView style={appStyle.bodyMain}>
            <BodyMain
              todo={filterList}
              updateTodo={setTodoList}
              deleteTodo={deleteTodo}
            />
          </ScrollView>
          <AddTodo addNewTodoList={addNewTodoList} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={appStyle.footer}>
        <Footer countStatus={countStatus} updateTodo={filterTodo} />
      </View>
    </>
  );
}
