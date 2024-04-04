import * as React from "react";
import {
  View,
  text,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Windows,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../Form/assets/logo.png";
import shirt from "../../Form/assets/shirt.webp";
import jacket from "../../Form/assets/jacket.webp";
import pants from "../../Form/assets/pants.webp";
import { TextInput } from "react-native-paper";
import Categories from "./categories";
import HomeScreen from "./homescreen";
import Shirtdetails from "./shirtdetails";
import Logos from "../../Form/assets/logo1.png";

const { width } = Dimensions.get("window");

function LandingScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../Form/assets/logo1.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Original IGN Photography Hub</Text>
      <Text style={styles.description}>
        Discover the art and beauty of photography.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Categories")}
      >
        <Text style={styles.buttonText}>Explore Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#080c16"
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center"
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "white"
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingScreen;
