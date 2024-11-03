import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
    paddingBottom: 80,
  },
  searchContainer: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E2B33",
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
    elevation: 4,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: "#2E2B33",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  itemAddress: {
    fontSize: 12,
    color: "#bbb",
    marginTop: 8,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#999",
  },
});

export default styles;
