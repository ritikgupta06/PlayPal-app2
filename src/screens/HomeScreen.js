import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Home";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    id: "1",
    title: "Outdoor",
    image: require("../../assets/images/outdoor-games.jpg"),
  },
  {
    id: "2",
    title: "Online",
    image: require("../../assets/images/online-games.jpg"),
  },
  {
    id: "3",
    title: "Board Games",
    image: require("../../assets/images/board-game.jpg"),
  },
  {
    id: "4",
    title: "Sports",
    image: require("../../assets/images/sports-game.jpg"),
  },
  {
    id: "5",
    title: "Tournaments",
    image: require("../../assets/images/tournaments.jpg"),
  },
];

const popularGames = [
  {
    id: "1",
    name: "Cricket",
    image: require("../../assets/images/cricket.jpg"),
  },
  {
    id: "2",
    name: "Football",
    image: require("../../assets/images/football.jpg"),
  },
  {
    id: "3",
    name: "Chess",
    image: require("../../assets/images/chess.jpg"),
  },
  {
    id: "4",
    name: "Ludo",
    image: require("../../assets/images/ludo.jpg"),
  },
  {
    id: "5",
    name: "Badminton",
    image: require("../../assets/images/badminton.jpg"),
  },
  {
    id: "6",
    name: "Valorant",
    image: require("../../assets/images/valorant.jpg"),
  },
  {
    id: "7",
    name: "Call of Duty",
    image: require("../../assets/images/call-of-duty.jpg"),
  },
];

const upcomingMatches = [
  { id: "1", title: "Cricket Tournament", time: "Tomorrow at 5 PM" },
  { id: "2", title: "Valorant Tournament", time: "Sunday at 3 PM" },
  { id: "3", title: "Chess Tournament", time: "Tomorrow at 5 PM" },
  { id: "4", title: "Badminton Tournament", time: "Sunday at 3 PM" },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header hasNotifications={true} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome, <Text style={styles.highlight}>Sanskar</Text>
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#fff" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for games or friends"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.categoryCard}
                onPress={() => navigation.navigate("PlayScreen")}
              >
                <View style={styles.categoryIcon}>
                  <Image
                    source={item.image}
                    style={styles.categoryIcon}
                    resizeMode="fill"
                  />
                </View>
                <Text style={styles.categoryText}>{item.title}</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Games</Text>
          <FlatList
            data={popularGames}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.gameCard}>
                <Image source={item.image} style={styles.gameImage} />
                <Text style={styles.gameName}>{item.name}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Upcoming Matches</Text>
          {upcomingMatches.map((match) => (
            <View key={match.id} style={styles.matchCard}>
              <Text style={styles.matchTitle}>{match.title}</Text>
              <Text style={styles.matchTime}>{match.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
