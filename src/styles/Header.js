import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#1D1B20",
  },
  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 1,
  },
  highlight: {
    color: "#8A2BE2",
  },
  notificationButton: {
    position: "relative",
    padding: 5,
  },
  notificationDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "red",
  },
});

export default styles;
