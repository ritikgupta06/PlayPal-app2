import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import * as Location from "expo-location";
import styles from "../styles/Search";

const PARKS_DATA = [
  {
    id: "1",
    name: "Allen Forest Zoo",
    address: "Husainabad, Kanpur, UP, India",
    latitude: 26.448654,
    longitude: 80.325345,
  },
  {
    id: "2",
    name: "Nana Rao Park",
    address: "Civil Lines, Kanpur, UP, India",
    latitude: 26.467365,
    longitude: 80.324695,
  },
  {
    id: "3",
    name: "Phool Bagh",
    address: "Mall Road, Kanpur, UP, India",
    latitude: 26.45861,
    longitude: 80.321198,
  },
  {
    id: "4",
    name: "Mahatma Gandhi Park",
    address: "Sadar, Kanpur, UP, India",
    latitude: 26.465221,
    longitude: 80.352524,
  },
  {
    id: "5",
    name: "Nehru Park",
    address: "Nehru Road, Kanpur, UP, India",
    latitude: 26.469155,
    longitude: 80.359635,
  },
  {
    id: "6",
    name: "Kanpur Zoo",
    address: "Near Allen Forest, Kanpur, UP, India",
    latitude: 26.448824,
    longitude: 80.325689,
  },
  {
    id: "7",
    name: "Mangal Pandey Park",
    address: "Gumti No. 5, Kanpur, UP, India",
    latitude: 26.470562,
    longitude: 80.358092,
  },
  {
    id: "8",
    name: "Lal Bangla Park",
    address: "Nawabganj, Kanpur, UP, India",
    latitude: 26.477409,
    longitude: 80.351322,
  },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredParks, setFilteredParks] = useState(PARKS_DATA);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredParks(PARKS_DATA);
    } else {
      const filtered = PARKS_DATA.filter((park) =>
        park.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredParks(filtered);
    }
  }, [searchQuery]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    })();
  }, []);

  const openInGoogleMaps = (latitude, longitude, name) => {
    const url = Platform.select({
      ios: `maps:0,0?q=${name}@${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}(${name})`,
    });

    Linking.openURL(url).catch((err) =>
      console.error("Failed to open Google Maps:", err)
    );
  };

  const renderParkItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => openInGoogleMaps(item.latitude, item.longitude, item.name)}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAddress}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header hasNotifications={true} />
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for parks or grounds..."
          placeholderTextColor="#888"
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <FlatList
        data={filteredParks}
        keyExtractor={(item) => item.id}
        renderItem={renderParkItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No parks found.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
