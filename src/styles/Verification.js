import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1D1B20",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 50,
  },
  infoText: {
    color: "#999",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  codeInput: {
    color: "gray",
    backgroundColor: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    fontSize: 20,
    textAlign: "center",
    width: 60,
    marginHorizontal: 10,
  },
  continueButton: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: "#8A2BE2",
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: "center",
    marginBottom: 20,
  },
  continueText: {
    fontSize: 15,
    color: "#fff",
  },
  resendText: {
    fontSize: 14,
    color: "#888",
  },
  timerText: {
    color: "#8A2BE2",
  },
});

export default styles;
