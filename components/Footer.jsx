import { Text, TouchableOpacity, View } from "react-native";
import { footerStyle } from "../styles/FooterStyle";
import { useEffect, useState } from "react";

export default function Footer(props) {
  const [flag, setFlag] = useState("all");

  const activeTxt = (txt) => {
    return {
      fontWeight: "bold",
      fontSize: 15,
      color: txt === flag ? "#2F76E5" : "black",
    };
  };
  return (
    <>
      <View style={footerStyle.main}>
        <TouchableOpacity
          style={footerStyle.btn}
          onPress={() => {
            setFlag("all");
            props.updateTodo("all");
          }}
        >
          <Text style={activeTxt("all")}>All ({props.countStatus.all})</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={footerStyle.btn}
          onPress={() => {
            setFlag("inProgress");
            props.updateTodo("inProgress");
          }}
        >
          <Text style={activeTxt("inProgress")}>
            In Progress ({props.countStatus.inProgress})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={footerStyle.btn}
          onPress={() => {
            setFlag("completed");
            props.updateTodo("completed");
          }}
        >
          <Text style={activeTxt("completed")}>
            Completed ({props.countStatus.completed})
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
