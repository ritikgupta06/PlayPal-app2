import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import styles from "../styles/Profile";

export default function ProfileScreen() {
  const userDetails = [
    {
      id: "1",
      icon: "person-circle-outline",
      label: "Sanskar Soni",
    },
    {
      id: "2",
      icon: "call-outline",
      label: "+91 8967452743",
    },
    {
      id: "3",
      icon: "mail-outline",
      label: "sanskarsoni45@gmail.com",
    },
    {
      id: "4",
      icon: "location-outline",
      label: "Kanpur, India",
    },
    {
      id: "5",
      icon: "person-outline",
      label: "Male",
    },
  ];

  return (
    <View style={styles.container}>
      <Header hasNotifications={true} />
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/images/card-1.jpg")}
          style={styles.coverImage}
        />

        <View style={styles.headerContainer}>
          <Image
           source={require("../../assets/users/vaibhav-post.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Sanskar Soni</Text>
        </View>

        <View style={styles.singleCard}>
          {userDetails.map((item) => (
            <View key={item.id} style={styles.detailRow}>
              <Ionicons name={item.icon} size={24} color="#FFFFFF" />
              <Text style={styles.profileDetails}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
