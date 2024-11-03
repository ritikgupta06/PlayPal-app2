import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
  },
  picker: {
    height: 45,
    color: "#fff",
    backgroundColor: "#2C2C2E",
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  list: {
    paddingBottom: 80,
    gap: 20,
  },
  card: {
    backgroundColor: "#2C2C2E",
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    width: (width / 2) - 40,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 12,
    alignItems: "flex-start",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  gameType: {
    color: "#aaa",
    fontSize: 14,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noDataText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;
