import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header hasNotifications={true} />
      <View style={styles.max}>
        <Text style={styles.heading}>Chat Screen...</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
    alignItems: "center",
    justifyContent: "center",
  },
  max: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 36,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
