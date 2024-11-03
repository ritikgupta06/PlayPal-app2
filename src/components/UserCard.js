import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={user.avatar} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.name}>
          {user.name}, {user.age}
        </Text>
        <Text style={styles.game}>Looking to play: {user.game}</Text>
        <Text style={styles.location}>{user.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.75,
    borderRadius: 20,
    backgroundColor: "#2E2E2E",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  info: {
    flex: 0.3,
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  game: {
    fontSize: 16,
    color: "#AAAAAA",
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: "#CCCCCC",
    marginTop: 5,
  },
});

export default UserCard;
