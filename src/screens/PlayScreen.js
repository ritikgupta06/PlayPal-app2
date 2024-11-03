import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import data from "../../assets/data/games.json";
import styles from "../styles/Play";
import { Picker } from "@react-native-picker/picker";

const imageMap = {
  "../../assets/images/cricket.jpg": require("../../assets/images/cricket.jpg"),
  "../../assets/images/football.jpg": require("../../assets/images/football.jpg"),
  "../../assets/images/chess.jpg": require("../../assets/images/chess.jpg"),
  "../../assets/images/ludo.jpg": require("../../assets/images/ludo.jpg"),
  "../../assets/images/badminton.jpg": require("../../assets/images/badminton.jpg"),
  "../../assets/images/valorant.jpg": require("../../assets/images/valorant.jpg"),
  "../../assets/images/call-of-duty.jpg": require("../../assets/images/call-of-duty.jpg"),
};

export default function PlayScreen() {
  const [games, setGames] = useState([]);
  const [grounds, setGrounds] = useState([]);
  const [selectedGameType, setSelectedGameType] = useState("All");
  const [selectedGround, setSelectedGround] = useState("All");
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    setGames(data.games);
    setGrounds(data.grounds);
    setFilteredGames(data.games);
  }, []);

  useEffect(() => {
    filterGames();
  }, [selectedGameType, selectedGround]);

  const filterGames = () => {
    let filtered = games;

    if (selectedGameType !== "All") {
      filtered = filtered.filter((game) => game.gameType === selectedGameType);
    }

    if (selectedGround !== "All") {
      filtered = filtered.filter((game) =>
        game.locations.some((location) => location.name === selectedGround)
      );
    }

    setFilteredGames(filtered);
  };

  const renderGameItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={imageMap[item.image]} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.gameType}>{item.gameType}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header hasNotifications={true} />
      <View style={styles.filterContainer}>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Game Type:</Text>
          <Picker
            selectedValue={selectedGameType}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedGameType(itemValue)}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Sports" value="Sports" />
            <Picker.Item label="Board Games" value="Board Games" />
            <Picker.Item label="Video Games" value="Video Games" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Ground:</Text>
          <Picker
            selectedValue={selectedGround}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedGround(itemValue)}
          >
            <Picker.Item label="All" value="All" />
            {grounds.map((ground) => (
              <Picker.Item
                key={ground.id}
                label={ground.name}
                value={ground.name}
              />
            ))}
          </Picker>
        </View>
      </View>
      {filteredGames.length > 0 ? (
        <FlatList
          data={filteredGames}
          renderItem={renderGameItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          numColumns={2}
          style={styles.list}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No games found.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
