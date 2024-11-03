import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Updated import
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/Notification";
import notificationsData from "../../assets/data/notification.json";

const { width } = Dimensions.get("window");

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(notificationsData);
  }, []);

  const handleClearAll = () => {
    if (notifications.length === 0) return;

    Alert.alert(
      "Clear All Notifications",
      "Are you sure you want to clear all notifications?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => setNotifications([]) },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Ionicons
        name={getIconNameByType(item.type)}
        size={30}
        color="#8A2BE2"
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Header />
      <View style={styles.headerSection}>
        <Text style={styles.screenTitle}>Notifications</Text>
        {notifications.length > 0 && (
          <TouchableOpacity onPress={handleClearAll}>
            <Text style={styles.clearAllText}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled={true}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notifications available.</Text>
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) return "Invalid date";
  return date.toLocaleString();
};

const getIconNameByType = (type) => {
  switch (type) {
    case "invite":
      return "person-add-outline";
    case "friend_request":
      return "people-outline";
    case "reminder":
      return "alarm-outline";
    default:
      return "notifications-outline";
  }
};
