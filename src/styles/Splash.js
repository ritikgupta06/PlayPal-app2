import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  heroImage: {
    width: 260,
    height: "auto",
    aspectRatio: 1,
    marginBottom: 50,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
  headingMain: {
    fontSize: 32,
    fontWeight: "700",
    color: "#999",
    textAlign: "center",
  },
  highlight: {
    fontSize: 28,
    fontWeight: "700",
    color: "#8A2BE2",
    textAlign: "center",
    marginTop: 5,
  },
  loader: {
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#CCCCCC",
    textAlign: "center",
  },
});

export default styles;
