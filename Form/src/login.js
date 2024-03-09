import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../Form/assets/logo.png";
import { TextInput } from "react-native-paper";
function LoginScreen(props) {
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
      <Text style={styles.greet}>WELCOME BACK!</Text>
      <TextInput
        style={styles.emaill}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.passl}
        label="Password"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text
        style={styles.forgot}
        onPress={() => props.navigation.navigate("Recovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Landing")}
      >
        LOGIN
      </Button>
      <Text>
        Don't have an account?
        <Text
          style={{ color: "purple" }}
          onPress={() => props.navigation.navigate("Signup")}
        >
          Signup.
        </Text>
      </Text>
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
    backgroundColor: "#05445E",
  },
  passl: {
    marginTop: 10,
    height: 40,
    width: "50%",
  },
  forgot: {
    color: "purple",
    fontSize: 10,
    textAlign: "right",
  },
  greet: {
    color: "purple",
    fontSize: 30,
    fontWeight: "1000",
    marginBottom: 20,
  },
  emaill: {
    height: 40,
    width: "50%",
  },
});

export default LoginScreen;
