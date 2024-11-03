import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/Header";

const Header = ({ hasNotifications }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#A9A9A9" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>
        Play<Text style={styles.highlight}>Pal</Text>
      </Text>

      <TouchableOpacity
        style={styles.notificationButton}
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <View>
          <MaterialIcons name="notifications" size={24} color="#A9A9A9" />
          {hasNotifications && <View style={styles.notificationDot} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
