import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
  },
  scrollContainer: {
    padding: 20,
    marginBottom: 60,
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  highlight: {
    color: "#8A2BE2",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E2B33",
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 14,
    flex: 1,
    color: "#fff",
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "600",
  },
  categoryCard: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    elevation: 3,
  },
  categoryIcon: {
    backgroundColor: "#3A3A40",
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 5,
    width: 80,
    height: 80,
  },
  categoryText: {
    textAlign: "center",
    color: "#999",
    fontSize: 14,
    fontWeight: "500",
  },
  gameCard: {
    backgroundColor: "rgba(58, 58, 64, 0.7)",
    borderRadius: 15,
    padding: 11,
    alignItems: "center",
    marginRight: 15,
    width: 140,
    backdropFilter: "blur(10px)",
  },
  gameImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: "fill",
  },
  gameName: {
    color: "#ddd",
    fontSize: 14,
    textAlign: "center",
  },
  matchCard: {
    backgroundColor: "#2E2B33",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  matchTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  matchTime: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 5,
  },
});

export default styles;
