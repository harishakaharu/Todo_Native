import { StyleSheet } from "react-native";
export const mainBodyStyle = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: 85,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
    marginBottom: 10,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  img: { width: 50, height: 30 },
  title: { fontSize: 20, color: "black" },
});
