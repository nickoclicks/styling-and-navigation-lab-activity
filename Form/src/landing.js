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

function LandingScreen(props) {
  console.log(props);
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",

          flex: 1,
        }}
      >
        <Image source={Logos} style={styles.logo1} />
        <TouchableOpacity
          onPress={() => props.navigation.navigate(Shirtdetails)}
        >
          <Image source={shirt} style={styles.logo} />
          <Text style={styles.shirts}>Shirt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(Shirtdetails)}
        >
          <Image source={jacket} style={styles.logo2} />
          <Text style={styles.jackets}>Jackets</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(Shirtdetails)}
        >
          <Image source={pants} style={styles.logo3} />
          <Text style={styles.grt}>Pants</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
    marginRight: 30,
    marginTop: 30,
    flexDirection: "row",
  },
  logo2: {
    height: 200,
    width: 200,
    marginTop: 30,
    marginRight: 30,
    flexDirection: "row",
  },
  logo3: {
    height: 200,
    width: 200,
    marginTop: 30,
    flexDirection: "row",
  },
  logo1: {
    height: 100,
    width: 370,
  },
  login: {
    marginTop: 10,
    width: "50%",
  },
  passl: {
    marginTop: 10,
  },
  forgot: {
    color: "purple",
    fontSize: 10,
    textAlign: "right",
  },
  shirts: {
    color: "purple",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    marginRight: 18,
  },
  jackets: {
    color: "purple",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    marginRight: 27,
  },
  grt: {
    color: "purple",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
  logout: {
    width: "50%",
    marginTop: 10,
    backgroundColor: "#05445E",
  },
});

export default LandingScreen;
