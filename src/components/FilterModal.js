import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker'; // Correct import for Picker

const FilterModal = ({ visible, onClose, onApply }) => {
  const [selectedGame, setSelectedGame] = useState("All");

  const handleApply = () => {
    onApply(selectedGame);
    onClose(); // Close modal after applying
  };

  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Filter by Game</Text>
        <Picker
          selectedValue={selectedGame}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedGame(itemValue)}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Fortnite" value="Fortnite" />
          <Picker.Item label="Valorant" value="Valorant" />
          <Picker.Item label="League of Legends" value="League of Legends" />
        </Picker>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#2E2E2E",
    padding: 30,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
    marginBottom: 10,
  },
  picker: {
    height: 50, // Added height for better usability
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 12,
    marginBottom: 30,
    paddingHorizontal: 14,
  },
  applyButton: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#8A2BE2",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  applyText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default FilterModal;
