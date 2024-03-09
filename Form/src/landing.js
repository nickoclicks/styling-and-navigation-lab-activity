import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../Form/assets/logo.png";
import { TextInput } from "react-native-paper";
function LandingScreen(props) {
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#75E6DA",
      }}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.grt}>WELCOME! You are here in our landing page!</Text>
      <Button
        style={styles.logout}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        LOGOUT
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
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
  grt: {
    color: "purple",
    fontSize: 20,
    fontWeight: "1000",
    textAlign: "center",
  },
  logout: {
    width: "50%",
    marginTop: 10,
    backgroundColor: "#05445E",
  },
});

export default LandingScreen;
