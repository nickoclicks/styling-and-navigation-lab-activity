import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, imageUrl: require("../../Form/assets/street1.jpg") },
    { id: 2, imageUrl: require("../../Form/assets/portrait1.jpg") },
    { id: 3, imageUrl: require("../../Form/assets/wild1.jpg") },
    // Add more favorite photos as needed
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((photo) => photo.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.map((photo) => (
        <TouchableOpacity
          key={photo.id}
          onPress={() => removeFavorite(photo.id)}
        >
          <Image source={photo.imageUrl} style={styles.photo} />
        </TouchableOpacity>
      ))}
      {favorites.length === 0 && (
        <Text style={styles.emptyMessage}>No favorites yet.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#080c16"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  photo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  emptyMessage: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
  },
});

export default FavoritesPage;
