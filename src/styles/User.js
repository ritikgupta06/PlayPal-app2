import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#2E2B33",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    width: "90%",
    marginTop: 50,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginBottom: 20,
  },
  username: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    color: "#CCCCCC",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: "#AAAAAA",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
    color: "#FFFFFF",
  },
  connectButton: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: "#8A2BE2",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  connectText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default styles;
