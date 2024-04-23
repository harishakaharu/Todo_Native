import { Text, TouchableOpacity, Image } from "react-native";
import check from "../assets/check.png";
import { mainBodyStyle } from "../styles/MainBodyStyle";
export default function Card({ data, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      style={mainBodyStyle.main}
      onPress={() => onPress(data)}
      onLongPress={() => onLongPress(data)}
    >
      <Text
        style={[
          mainBodyStyle.title,
          data.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {data.title}
      </Text>
      {data.isCompleted && (
        <Image
          source={check}
          style={mainBodyStyle.img}
          resizeMode="contain"
        ></Image>
      )}
    </TouchableOpacity>
  );
}
