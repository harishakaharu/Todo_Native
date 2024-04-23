import { Text, Image } from "react-native";
import icon from "../assets/logo.png";
import { headerStyle } from "../styles/HeaderStyle";
export default function Header() {
  return (
    <>
      <Image source={icon} style={headerStyle.img} resizeMode="contain"></Image>
      <Text style={headerStyle.imgTxt}>
        You probably have something to do..
      </Text>
    </>
  );
}
