import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
  },
  profileSection: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  coverImage: {
    width: "90%",
    height: 180,
    position: "absolute",
    top: 0,
    borderRadius: 14,
    opacity: 1,
    zIndex: -1,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginBottom: 10,
    marginTop: 30,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 10,
  },
  singleCard: {
    backgroundColor: "#333333",
    borderRadius: 14,
    padding: 20,
    width: width * 0.85,
    marginTop: 20,
    elevation: 5,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  profileDetails: {
    color: "#ccc",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default styles;
