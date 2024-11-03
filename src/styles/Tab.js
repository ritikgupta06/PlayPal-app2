import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    height: 64,
    backgroundColor: "#2F2F2F",
    paddingBottom: 10,
    paddingTop: 12,
    padding: 14,
    borderTopWidth: 0,
  },
  tabBarLabel: {
    fontSize: 10,
    color: "#F0F0F0",
    marginBottom: 4,
    fontWeight: "500",
  },
});

export default styles;
