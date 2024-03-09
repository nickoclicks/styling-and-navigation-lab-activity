import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../Form/assets/logo.png";
import { TextInput } from "react-native-paper";
function SignupScreen(props) {
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
      <Text style={styles.create}>CREATE ACCOUNT</Text>
      <TextInput
        style={styles.usernames}
        label="Username"
        value={text}
        onChangeText={(text) => setText(text)}
      />
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
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        SIGNUP
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
    backgroundColor: "#05445E",
  },
  passl: {
    marginTop: 10,
  },
  usernames: {
    marginBottom: 10,
  },
  create: {
    color: "purple",
    fontSize: 30,
    fontWeight: "1000",
    marginBottom: 20,
  },
});

export default SignupScreen;
