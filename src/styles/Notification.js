import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "#1D1B20",
  },
  screenTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  clearAllText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
    backgroundColor: "#444",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  listContent: {
    padding: 16,
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#2C2A30",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    color: "#CCCCCC",
    fontSize: 14,
    marginBottom: 6,
  },
  timestamp: {
    color: "#888888",
    fontSize: 12,
    textAlign: "right",
  },
  emptyText: {
    color: "#CCCCCC",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
