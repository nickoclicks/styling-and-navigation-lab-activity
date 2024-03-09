import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../Form/assets/logo.png";
import { TextInput } from "react-native-paper";
function RecoveryScreen(props) {
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
      <Text style={styles.rest}>RESET PASSWORD</Text>
      <TextInput
        style={styles.passl}
        label="Email address"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        style={styles.reset}
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        SEND RESET CODE
      </Button>
      <Text
        style={styles.back}
        onPress={() => props.navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    color: "purple",
    fontSize: 10,
  },
  reset: {
    width: "70%",
    marginTop: 15,
    backgroundColor: "#05445E",
  },
  logo: {
    height: 200,
    width: 200,
  },
  login: {
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
  rest: {
    color: "purple",
    fontSize: 30,
    fontWeight: "1000",
  },
});

export default RecoveryScreen;
