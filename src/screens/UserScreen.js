import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/User";

export default function UserScreen({ route }) {
  const { user } = route.params;
  const navigation = useNavigation();

  const handleConnect = () => {
    Alert.alert(
      "Connect",
      `Do you want to connect with ${user.username}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("ChatScreen") },
      ],
      { cancelable: false }
    );
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Header hasNotifications={false} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>User data is unavailable.</Text>
        </View>
        <StatusBar style="light" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header hasNotifications={false} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Image
            source={{ uri: user.avatar }}
            style={styles.avatar}
            resizeMode="cover"
          />
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="github" size={30} color="#888" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                name="linkedin"
                size={30}
                color="#888"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="twitter" size={30} color="#888" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.connectButton} onPress={handleConnect}>
          <Text style={styles.connectText}>Connect Now</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}
